import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent implements OnInit {

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
