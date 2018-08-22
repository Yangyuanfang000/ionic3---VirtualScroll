import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// 引入Http模块
import { Http } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public page = 1;  //每次数据请求数据的页码
  public lists = [];  //将每次请求到的数据合并到该数组中进行页面渲染
  public request = [];     //每次数据请求后得到的数据

  constructor(public navCtrl: NavController,public http: Http) {
    this.upRequestData("");// 页面初次加载时调用 requestData() 函数
  }

  // 上拉触底时要调用该函数（上拉加载更多函数）
  doInfinite(infinite){
    this.upRequestData(infinite); // 调用 requestData() 函数
  }


  // 下拉触顶触发事件 lowRequestData(lowInfinit) （下拉刷新函数）
  doRefresh(infinite){
    this.page = 1;
    this.upRequestData(infinite);
  }

  // 上拉触底和下拉触顶都要调用该函数；通过判断page是否等于1决定lists数组中的值
  upRequestData(infiniteScroll){

    var url = "http://jsonplaceholder.typicode.com/posts?userId="+this.page;

    console.log(url);

    this.http.get(url).subscribe((data)=>{

      //每次请求到的数据
      this.request = JSON.parse( data['_body']);

      if(this.page == 1){ //如果page=1可能是页面初次加载，也可能是下拉触顶执行的刷新页面函数；此时都要使新请求到的数据覆盖掉原数组lists
        this.lists = this.request;
      }else{//如果page>1一定是页面上拉触底执行的加载更多函数；此时要使新请求到的数据与原数组lists合并后在渲染到页面上
        this.lists = this.lists.concat( JSON.parse( data['_body']));
      }

      console.log(this.lists);

      this.page ++;

      if(infiniteScroll){
        infiniteScroll.complete();
        if(this.request.length == 0){
          infiniteScroll.enable(false);// 如果请求到的数据数组长度为零则隐藏上拉加载更多样式
        }
      }
    })

  }


}
