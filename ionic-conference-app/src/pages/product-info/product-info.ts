import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
import { ProductInfoService } from './product-info.service';
/**
 * Generated class for the ProductInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
  providers: [ProductInfoService]
})
export class ProductInfoPage {
  public product_info:any = {
    product_name : '',
    product_price : '',
    product_description : '',
    photo_path:''
  };
  private nav: any;
  public server = 'http://localhost:3018/';
  @ViewChild(Slides) slides: Slides;
  public segment = 'product';
  public isGood = '1';
  constructor(public navCtrl: NavController, public navParams: NavParams,public productInfoService:ProductInfoService) {
    this.nav = navCtrl;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.product_info.product_name = sessionStorage.getItem('product_name');
    this.product_info.product_price = sessionStorage.getItem('product_price');
    this.product_info.product_description = sessionStorage.getItem('product_description');
    this.product_info.photo_path = sessionStorage.getItem('photo_path');
    // console.log('谢子键谢子键'+this.product_info.product_description);
  }
    goToSlide() {
      this.slides.slideTo(2, 500);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductInfoPage');
  }
  autoPlay(){
    this.slides.startAutoplay();
  }
  //点赞
  dianzan(){
  }
  //加入购物车
  toShoppingCar(){
    let postBody = this.product_info;
    this.productInfoService.add(postBody).subscribe(data => {
      if (data) {
        console.log(data);
        console.log('---------------添加成功----------------');
      } else {
        console.log('---------------添加失败----------------');
      }
    });
    this.nav.push(ShoppingCartPage);
  }
}
