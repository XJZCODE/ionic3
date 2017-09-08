import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
// import {ImagePicker} from '@ionic-native/image-picker';
// import { Observer } from 'rxjs/Observer';
// import {Observable} from "rxjs";
import { BatteryStatus } from '@ionic-native/battery-status';
import { BatteryStatusResponse } from '@ionic-native/battery-status';
import { TouchID } from '@ionic-native/touch-id';

/**
 * Generated class for the DemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {
  Level: any;
  public subscription: any;
  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus, private camera: Camera, private touchId: TouchID) {
  }
  ionViewDidLoad() {
    // watch change in battery status
    this.subscription = this.batteryStatus.onChange().subscribe(
      (status: BatteryStatusResponse) => {
        this.Level = status.level;
        console.log('xxxxxxxxxxxxxxx' + status.level, status.isPlugged);
      }
    );
  }

  takePicture() {

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      //      targetWidth: 1000,
      //      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  // touchID
  verifyFingerprint() {
    this.touchId.verifyFingerprint('Scan your fingerprint please')
      .then(
      res => console.log('Ok', res),
      err => console.error('Error', err)
      );
  }
}
