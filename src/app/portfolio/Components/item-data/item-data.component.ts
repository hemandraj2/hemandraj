import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent implements OnInit {

  searchText;
  tableSrachData:any = [
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

  constructor() { }

  ngOnInit(): void {
  }

  customDropdownClicked(){
    console.log("Dropdown Clicked");
  }

  customDropdownChanged(){
    console.log("Dropdown Changed");
  }

  customDropdownTyped(){
    console.log("Typed in custom Dropdown");
  }
}
