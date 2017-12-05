import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IfPaysuccessPage } from '../if-paysuccess/if-paysuccess';
/**
 * Generated class for the PayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  public i = 0;
  public nav:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }
  //显示浮动
  displayFloat() {
    (window as any)['$'](".ftc_wzsf").show();
  }
  //关闭浮动
  stopFloat() {
    (window as any)['$'](".ftc_wzsf").hide();
  }
  //数字显示隐藏
  mathDisplay() {
    (window as any)['$'](".numb_box").slideUp(500);
  }
  mathStop() {
    (window as any)['$'](".numb_box").slideDown(500);
  }

  mathXX() {
    this.i++
    let that = this;
    if (this.i < 6) {
      (window as any)['$'](".mm_box li").eq(this.i - 1).addClass("mmdd");
    } else {
      (window as any)['$'](".mm_box li").eq(this.i - 1).addClass("mmdd");
      setTimeout(function () {
        that.nav.push(IfPaysuccessPage);
      }, 500);
    }
  }
  mathYY() {
    if (this.i > 0) {
      this.i--
      (window as any)['$'](".mm_box li").eq(this.i).removeClass("mmdd");
      this.i == 0;
    }
  }

}
