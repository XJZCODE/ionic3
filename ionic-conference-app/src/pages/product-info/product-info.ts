import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
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
})
export class ProductInfoPage {

  @ViewChild(Slides) slides: Slides;
  public segment = 'product';
  public isGood = '1';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  dianzang(){
    
  }
}
