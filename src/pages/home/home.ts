import { Component,ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { newsPage } from '../pages';
import {loginPage} from '../pages';
import { Slides } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider:Slides;
  constructor(private nav: NavController) {

  }
  goToNewCarDetail(){
    this.nav.push(loginPage);
  }
    ngOnInit(){
    setInterval(()=>{
      this.slider.slideNext(300,true);
    },2000);}
}
