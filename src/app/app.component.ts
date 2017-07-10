import { Component ,ViewChild, Input} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {Nav} from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { newsPage } from '../pages/news/news';
import { cardetailPage } from '../pages/cardetail/cardetail';
import {loginPage} from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav:Nav;
  @Input() content: any;
  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });
  }
  goHome(){
    this.nav.push(HomePage);
  }
  goNews(){
    this.nav.push(newsPage);
  }
}
