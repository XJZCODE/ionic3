import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Http, ConnectionBackend } from '@angular/http';
import { NavController } from 'ionic-angular';
import { SignupService } from './signup.service';
// import { TabsPage } from '../tabs-page/tabs-page';
import { TabsPage } from '../tabs-page/tabs-page';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html',
  providers: [SignupService]
})
export class SignupPage {
    private nav: any;
    public user = {
      username: "",
      password: "",
      email:"",
      mobile:""
      };
  // private authService: AuthServiceProvider;
  constructor(public navCtrl: NavController,public signupService:SignupService) {
    this.nav = navCtrl;
  }
  signup() {
    // console.log(user);
    let postBody = this.user;
    this.signupService.signup(postBody).subscribe(data => {
      if (data) {
        console.log(data);
        this.nav.push(TabsPage);
        console.log('---------------注册成功----------------');
      }else{
        this.nav.push(SignupPage);
      }
    });
  }
}
