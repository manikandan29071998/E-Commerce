import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/service/fake-api.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noWrapSlides = false;
  showIndicator = true;

  centered = false;
  
  apidata:any;
  
  max: number = 5;

  searchKey:string ="";

  filterCategory : any

  constructor( private service:FakeApiService) { }

  ngOnInit(): void {    
      
    this.service.getdata().subscribe((data:any)=>{
      this.apidata = data;    
      this.filterCategory = data;
      console.log(data);
        
    })
    

    $('.slider_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider_nav'
    });
    $('.slider_nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider_for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
        
  }

  slideConfig = { 
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,
    vertical:true,
    autoplay:true,
    verticalSwiping:true
  };

  filter(category:string){
    this.filterCategory = this.apidata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  
}
