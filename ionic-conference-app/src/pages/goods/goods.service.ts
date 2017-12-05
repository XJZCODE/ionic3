import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()

export class GoodsService {


	constructor(
        public http: Http
    ) { }
    
    list() {
        return this.http.post('http://192.168.99.1:3018/api/v1/products/list/photo',{});
      }
}