import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductInfoPage } from '../product-info/product-info';
import { OrderPage } from '../order/order';

/**
 * Generated class for the ShoppingCartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html',
  providers: [ShoppingCartService]
})
export class ShoppingCartPage {
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
  public dataLength: any;
  public num = 0;
  public allPrice = 0;
  public total_price = 0;
  public ProductList = [
    {
      p_id: 1,
      product_name: "火龙果",
      product_count: 3,
      product_price: 25,
      total_price: 0,
      path: 'fruit3-1511492194070.jpg'
    }, {
      p_id: 2,
      product_name: "菠萝",
      product_count: 1,
      product_price: 15,
      total_price: 0,
      path: 'fruit3-1511492194070.jpg'

    }];
  public sda = {
    "data": [
      {
        "product_name": "2",
        "product_count": 1,
        "p_id": 8029,
        "product_price": 1,
        "total_price": "232",
        "path": "sdsds.png"
      },
      {
        "product_name": "2",
        "product_count": 1,
        "p_id": 8029,
        "product_price": 1,
        "total_price": "232",
        "path": "sdsds.png"
      }
    ]
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingCartService: ShoppingCartService) {

    this.nav = navCtrl;
  }
  //点击跳转商品详情页面
  productInfo() {

    this.nav.push(ProductInfoPage);
  }
  toOrder() {
    let postBody = this.sda;
    this.shoppingCartService.add(postBody).subscribe(data => {
      if (data) {
        console.log(data);
        console.log('---------------添加成功----------------');
      } else {
        console.log('---------------添加失败----------------');
      }
    });
    this.nav.push(OrderPage);
  }
  // 购物车点击增加商品数量
  addNum(item?: any) {
    this.ProductList[item].product_count += 1;
    this.totalProduct();
    // this.num += 1;
  }
  // 购物车点击减少商品数量
  delNum(item?: any) {
    if (this.ProductList[item].product_count > 1) {
      this.ProductList[item].product_count -= 1;

    }

    this.totalProduct();
  }
  //计算商品总价
  totalProduct() {
    this.total_price = 0;
    for (var i = 0; i < this.ProductList.length; i++) {
      this.total_price += this.ProductList[i].product_count * this.ProductList[i].product_price;
    }
  }
  ngOnInit() {

    this.totalProduct();

  }

}
