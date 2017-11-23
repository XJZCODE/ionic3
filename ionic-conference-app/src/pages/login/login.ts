import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';


// import { UserOptions } from '../../interfaces/user-options';

 import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { LoginService } from './login.service';
@Component({
  selector: 'page-user',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  private nav: any;
  public user = {
		username: "",
    password: "",
    role:"admin"
	};
  // private usercreds: any;
  // private service: any;
  constructor(public navCtrl: NavController,public loginService:LoginService) {

    this.nav = navCtrl;


  }
  login() {
    // console.log(user);
    let postBody = this.user;
    this.loginService.login(postBody).subscribe(data => {
      if (data) {
        console.log(data);
        this.nav.push(TabsPage);
        console.log('---------------登录成功----------------');
      }else{
        this.nav.push(LoginPage);
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
