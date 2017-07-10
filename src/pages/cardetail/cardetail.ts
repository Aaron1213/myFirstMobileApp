import { Component} from '@angular/core';
import {NavParams} from 'ionic-angular';  
@Component({
  templateUrl: 'cardetail.html'
})
export class cardetailPage {

public carDetails:any;
public carDetailsContent:any;
public newCarTitle:any;
public isReadOnly:boolean=true;
public Visiable:boolean=false;

constructor(public param:NavParams) {
    this.newCarTitle = "New " + param.data.car.id;
    this.carDetails = param.data.car.id;
    this.carDetailsContent = param.data.car.introduction;
    switch (param.data.people){
      case "admin":
          this.isReadOnly=false;
          this.Visiable = true;
      break;
      case "readonly":
          this.isReadOnly=true;
          this.Visiable = true;
      break;
      default:
            this.isReadOnly=true;
            this.Visiable = false;
      break;
    }
  }
}
