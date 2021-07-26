import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getSearchTableData(){
    return [
      {
        "name":"Hemand Raj",
        "email":"hemandraj20@gmail.com",
        "phone":"8921786200"
      },
      {
        "name":"Mohan Raj",
        "email":"mohanraj20@gmail.com",
        "phone":"656565656"
      },
      {
        "name":"Santhosh Raj",
        "email":"santhoshraj40@gmail.com",
        "phone":"131641263"
      },
      {
        "name":"Aravind Raj",
        "email":"aravindraj52@gmail.com",
        "phone":"532168461"
      },
      {
        "name":"Prithvi Raj",
        "email":"prithviraj32@gmail.com",
        "phone":"879412555"
      }
    ];
  }
}
