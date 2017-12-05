import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class SignupService {

    constructor(
        private http: Http
    ) { }

    signup(postBody: any) {
        return this.http.post('http://192.168.43.70:3018/api/v1/users/register', postBody);
    }
}