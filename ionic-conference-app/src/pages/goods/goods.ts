import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoodsService } from './goods.service';
import { ProductInfoPage } from '../product-info/product-info';
/**
 * Generated class for the GoodsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
  providers: [GoodsService]
})
export class GoodsPage {
  public server = 'http://localhost:3018/';
  public goodslist: any = [];
  private nav: any;
  public productinfo = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsService: GoodsService) {
    this.nav = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsPage');
  }
  ngOnInit() {
    this.getGoodsList();
  }
  // 跳转到商品详情
  toProductInfo(info: any) {
    this.productinfo = info;
    sessionStorage.setItem("product_name", info.product_name);
    sessionStorage.setItem("product_price", info.product_price);
    sessionStorage.setItem("product_description", info.product_description);
    sessionStorage.setItem("photo_path", info.photos[0].path);
    console.log("啊哈哈哈哈艾萨克打开" + info.product_description);
    this.nav.push(ProductInfoPage);
  }


  getGoodsList() {

    this.goodsService.list().map(result => result.json()).subscribe(urgs => {
      if (urgs) {
        this.goodslist = urgs.data.list;
        // console.log("哈哈哈哈哈哈哈哈哈" + JSON.stringify(urgs.data));
      }
    });
  }
}
