import { Injectable } from '@angular/core';
import { Http,  Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
    private isLoggedin: any;
    private AuthToken: any;
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
    this.isLoggedin = false;
    this.AuthToken = null;
  }
  storeUserCredentials(userdata:any) {
    window.localStorage.setItem('userdata', JSON.stringify(userdata));
    this.useCredentials(userdata);

}
loadUserCredentials() {
    var token = window.localStorage.getItem('userdata');
    this.useCredentials(token);
}
useCredentials(userdata:any) {
    this.isLoggedin = !!true;
    this.AuthToken = userdata;
}

  authenticate(user:any) {
     console.log(user); 
    let postBody = user 
    return this.http.post('http://localhost:3000/authenticate',postBody)
    
    // var creds = btoa(user.name + ":" + user.password);
    // var headers = new Headers();
    // //  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Authorization', ' Basic ' + creds);

    // return new Promise(resolve => {
    //     this.http.get('http://localhost:3000/authenticate', {headers: headers}).subscribe(data => {
    //         if(data.json()){
    //             this.storeUserCredentials({
    //                 "username": user.name,
    //                 "password": user.password,
    //                 // "email": data.json().email
    //             });
    //             resolve(true);
    //         }
    //         else
    //             resolve(false);
    //     });
    // });
}
  adduser(user:any) {
    var creds = "name=" + user.name + "&password=" + user.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
        this.http.post('http://localhost:3000/adduser', creds, {headers: headers}).subscribe(data => {
            if(data.json().success){
                resolve(true);
            } else {
                resolve(false);
            }               
        });
    });
}
}
