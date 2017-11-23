import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoodsService } from './goods.service';
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
  public goodslist: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsService: GoodsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsPage');
  }
  ngOnInit() {
    this.getGoodsList();
  }
  getGoodsList() {
    this.goodsService.list().map(result => result.json()).subscribe(urgs => {
      if (urgs) {
        this.goodslist = urgs.data;
        console.log("哈哈哈哈哈哈哈哈哈"+JSON.stringify(urgs.data));
      }
    });
  }
}
