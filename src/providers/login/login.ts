import { Injectable } from '@angular/core';

// import {Http, Response, RequestOptions, Headers, HttpModule, URLSearchParams } from '@angular/http';
/*
import {
  Http,
  Response,
  RequestOptions,
  Headers,
  HttpModule,
  URLSearchParams
} from '@angular/http';
*/
import { HttpClient } from "@angular/common/http";

// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs/Rx";

//import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise'; // for add Promise
// import 'rxjs/Rx'; // for add all operator

import { Observable } from 'rxjs';

// import { Observable } from 'rxjs';


import { UserInfo } from '../../user-info';

import { Customer } from '../../customer';


@Injectable()
export class LoginProvider {

  apiRoot: string = "http://localhost:8080/SpringRestfulWebServicesCRUDExample";

  userInfo: UserInfo = new UserInfo();
  customer: Customer = new Customer();
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }
  someFunction(){

  }

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/countries`;
    //let search = new URLSearchParams();
    //search.set('foo','moo');
    //search.set('limit', '25');
  //  this.http.get().then().catch();

  this.http.get(url).subscribe(res => console.log(res));

/*
    this.http.get(url, {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
*/

  }

  getGoodBeers(): Observable<any> {
    return this.http.get('http://localhost:8180/okkyoApp/userAuths');
  }

  save(): Observable<any> {
    let result: Observable<Object>;

      result = this.http.post('http://localhost:8180/okkyoApp/userAuths',
       {  id:6,
        userName : 'testName',
        userLocation : 'IND',
        userLat : '425782313',
        userLog : '42578123123'
      })

    return result.catch(error => Observable.throw(error));
  }

/*
  getGoodBeers(): Observable<any> {
    return this.http.get('http://localhost:8180/SpringRestfulWebServicesCRUDExample/countries');
  }

  save(): Observable<any> {
    let result: Observable<Object>;

      result = this.http.post('http://localhost:8180/SpringRestfulWebServicesCRUDExample/countries',
       {  id:6,
        userName : 'testName',
        userLocation : 'IND',
        userLat : '425782313',
        userLog : '42578123123'
      })

    return result.catch(error => Observable.throw(error));
  }
*/
  doPOST1() {
    console.log("POST");

    this.userInfo.mobNumber = "75061";
    this.userInfo.latitude = "75061";
    this.userInfo.longitude = "75061";

//    let url = `${this.apiRoot}/customers`;

//    this.http.get(url).subscribe(res => console.log(res.json()));

//    let url = `${this.apiRoot}/customers/createUserInfo`;
//    this.http.post(url, this.userInfo).subscribe(res => console.log(res.json()));

     this.customer.name = "keshav13";
     this.customer.age = 35;

   // this.createCustomer(this.customer)
  //  .subscribe(data => console.log(data), error => console.log(error));

    this.customer = new Customer();
  }


  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/countries`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');

    this.customer.name = "keshav13";
    this.customer.age = 35;


    //this.headers.append('Accept', 'application/json');
    //this.headers.append('Content-Type', 'application/json' );
    //headers.append('Authorization' , 'Basic '+ btoa(tok));
   // let options = new RequestOptions({ headers: this.headers });

    let postParams = {
      "id": 6,
      "countryName" : "Nepal7" ,
      "population": 100007
    }

    this.http.post(url, postParams ).subscribe(res => console.log(res));

 /*   this.http.post( `${this.apiRoot}/clientes`,  this.customer,
     {
          observe: 'response',
          responseType: 'text'
      }
    );
*/
  }


  //createCustomer(customer: Object): Observable<Object> {
   // return this.http.post(`${this.apiRoot}` + `/customers/create`, customer);
  //}

}
