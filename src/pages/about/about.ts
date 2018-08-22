///<reference path="../../js/jquery.d.ts"/>
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  //
  // ionViewDidLoad(){
  //   alert("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
  // }
  // ionViewWillEnter(){
  //   alert("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");
  // }
  // ionViewDidEnter(){
  //   alert("3.0 ionViewDidEnter 当进入页面时触发");
  //   alert("ionViewDidEnter");
  //   let body = document.getElementById('#body');
  //   console.log("body:[" + body + "]");
  // }
  // ionViewWillLeave(){
  //   alert("4.0 ionViewWillLeave 当将要从页面离开时触发");
  // }
  // ionViewDidLeave(){
  //   alert("5.0 ionViewDidLeave 离开页面时触发");
  // }
  // ionViewWillUnload(){
  //   alert("6.0 ionViewWillUnload 当页面将要销毁同时页面上元素移除时触发");
  // }
  //
  // ionViewCanEnter(){
  //   alert("ionViewCanEnter");
  // }
  //
  // ionViewCanLeave(){
  //   alert("ionViewCanLeave");
  // }

  goNews(){
    this.navCtrl.push('NewsPage');
    // $ionicHistory.clearHistory()
  }
}
