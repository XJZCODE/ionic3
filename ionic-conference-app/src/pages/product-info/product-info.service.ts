import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ProductInfoService {

    
	constructor(
        private http: Http
    ) { }
    
    list(url:any) {
        return this.http.get(url);
      }
    add(postBody:any){
        return this.http.post('http://192.168.43.70:3018/api/v1/carts/add',postBody);
    }
}