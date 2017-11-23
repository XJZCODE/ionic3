import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()

export class GoodsService {


	constructor(
        public http: Http
    ) { }
    
    list() {
        return this.http.get('http://192.168.43.70:3018/api/v1/products/list/photo');
      }
}