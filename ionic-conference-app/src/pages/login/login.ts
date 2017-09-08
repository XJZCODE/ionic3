import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';


// import { UserOptions } from '../../interfaces/user-options';

 import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  private nav: any;
  private usercreds: any;
  // private service: any;
  constructor(public navCtrl: NavController, private authservice: AuthServiceProvider) {

    this.nav = navCtrl;
    this.usercreds = {
      name: '',
      password: ''
    }

  }
  login(user: any) {
    // console.log(user);
    this.authservice.authenticate(user).subscribe(data => {
      if (data) {
        console.log(data);
        this.nav.push(TabsPage);
        console.log('---------------登录成功----------------');
      }
    });
  }
  signUp() {
    this.nav.push(SignupPage);
  }
  // onLogin(form: NgForm) {
  //   this.submitted = true;

  //   if (form.valid) {
  //     this.userData.login(this.login.username);
  //     this.navCtrl.push(TabsPage);
  //   }
  // }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
