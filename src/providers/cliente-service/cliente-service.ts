import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";


import { UserInfo } from '../../user-info';
/*
  Generated class for the ClienteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ClienteServiceProvider Provider');
  }

  apiRoot: string = "http://localhost:8090/api";


  insert(obj : UserInfo) {
    return this.http.post(
        `${this.apiRoot}/customers/create`,
        obj
    );
}

}
