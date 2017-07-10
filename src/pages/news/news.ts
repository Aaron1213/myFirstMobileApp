import { Component,ViewChild  } from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import { cardetailPage } from '../pages'; 
@Component({
  templateUrl: 'news.html'
})
export class newsPage {
  @ViewChild('mySlider') slider:Slides;
  
  people:any;
   carlists = [
     { id:'A3', picturePath:'Images/A3.png', introduction:"A3 with most high technologys, First time we use"},
     { id:'A5', picturePath:'Images/A5.png', introduction:"Popular Mechanics acquired an inside perspective on the Audi A5 coupe and convertible"},
     { id:'A6', picturePath:'Images/A6.png', introduction:"In keeping with the tradition of big two-door cars, it would be powered by a hot engine: a 2. 8 liter turbo-charged V-6."}
     ];

  constructor(private nav:NavController,param:NavParams) {
    this.people = param.data.role;
  }
  
  ngOnInit(){
    setInterval(()=>{
      this.slider.slideNext(300,true);
    },2000);
  }

  knowAboutNewCar($event,car){
    let carDetail = car;
    this.nav.push(cardetailPage,{car,people:this.people});
  }
}
