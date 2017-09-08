import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Http, ConnectionBackend } from '@angular/http';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { UserOptions } from '../../interfaces/user-options';
// import { TabsPage } from '../tabs-page/tabs-page';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;
  private newcreds: any;
  // private authService: AuthServiceProvider;
  constructor(public navCtrl: NavController, public userData: UserData,private authService: AuthServiceProvider, private alertController: AlertController) 
  
  {
    this.newcreds = {
      name: '',
      password: ''
  }

  }

  register(user:any) {
    console.log(user);
    this.authService.adduser(user).then(data => {
        if(data) {
            let alert = this.alertController.create({
                title: '注册成功',
                subTitle: '用户已创建',
                buttons: ['好的']
            });
            alert.present();
        }
    }, error => {
        console.error("Failed!", error);
    });
}

// onSignup(form: NgForm) {
//   this.submitted = true;

//   if (form.valid) {
//     this.userData.signup(this.signup.username);
//     this.navCtrl.push(TabsPage);
//   }
// }
}
