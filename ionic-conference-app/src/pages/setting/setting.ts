import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  //点击退出登录
  cancel(){
    location.reload();
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      subTitle: '确认退出登录?',
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确认',       
          handler: () => {
            this.cancel();
          }
        }
      ]
    });
    alert.present();
  }

}
