import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { newsPage } from '../pages';
@Component({
  templateUrl: 'login.html'
})
export class loginPage {
   loginPeople = [
     { UserName:'ming.c.liu', password:'123', role:'admin'},
     { UserName:'xiao.a.chen', password:'234', role:'readonly'},
     { UserName:'testUser', password:'567', role:'editonly'}
     ];
     public username:any;
  constructor(private nav:NavController) {
  }

  login(){
      this.loginPeople.forEach(element => {
          if(this.username==element.UserName)
          this.nav.push(newsPage,element);
          else
          console.log(this.username +'is not valid');
      });
  }
}
