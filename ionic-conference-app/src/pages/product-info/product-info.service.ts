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
}