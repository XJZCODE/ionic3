import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ShoppingCartService {


    constructor(
        private http: Http
    ) { }

    add(postBody:any) {
        return this.http.post('http://192.168.1.101:3018/api/v1/orders/add',postBody);
    }
}