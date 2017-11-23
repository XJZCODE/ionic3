import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JumpService } from './jump.service';
import { ProductInfoPage } from '../product-info/product-info';
import { OrderPage } from '../order/order';
/**
 * Generated class for the JumpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jump',
  templateUrl: 'jump.html',
  providers: [JumpService]
})
export class JumpPage {
  public url = "https://api.douban.com/v2/movie/top250 ";
  private nav: any;
  public listData: any = {};
  public pageSize: any = 20;
  public count: any;
  public pageIndex = 1;
  public totalPageCount: any;
  public displayList: any = [];
  public pageStart: any = 0;
  public isLoadMore = true;
  public dataLength:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public jumpService: JumpService) {

    this.nav = navCtrl;
  }

  ionViewDidLoad() {
    this.getTopList();
  }
  //点击跳转商品详情页面
  productInfo(){
    this.nav.push(ProductInfoPage);
  }
  toOrder(){
    this.nav.push(OrderPage);
  }
  // 加载更多
  doInfinite(infiniteScroll: any) {
    console.log('Begin async operation');
      let that =this;
    // setTimeout(() => {
      if (that.displayList.length+20 < this.dataLength) {
        console.log("displayList.length "+this.displayList.length);
        console.log("pageIndex" + this.pageIndex);
        console.log("pageSize" + this.pageSize);
       setTimeout(()=>{
        this.pageStart = this.pageSize * this.pageIndex;
        this.pageIndex++;
        this.getPage(this.pageStart, this.listData);
        infiniteScroll.complete();
       })
      }
      else {
        this.isLoadMore = false;
        infiniteScroll.complete();
      }
    // })
  }
  //下拉刷新
  doRefresh(refresher:any) {
    setTimeout(() => {
      this.getPage(20,this.listData);
      refresher.complete();
    }, 2000);
  }
  getPage(pageStart: any, data: any) {
    // console.log(this.pageStart);
    for (let i = pageStart; i < this.pageSize * this.pageIndex; i++) {
      this.displayList.push(data.subjects[i]);
    }
  }
  // 获取列表
  getTopList() {
    this.jumpService.list("/api/v2/movie/top250?count=250")
      .map((data: any) => data.json())
      .subscribe(
      (data: any) => {
        // this.count = data.count;
        // this.totalPageCount = this.count/this.pageSize;
        this.listData = data;
        this.dataLength = data.subjects.length;
        this.getPage(this.pageStart, data);
      },
      err => console.log(err), // error
      () => console.log('getUserStatus Complete') // complete
      );
  }
}