import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../../Services/common.service';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent implements OnInit {

  //Custom_Dropdown
  customDropdown;
  suggestionBoxActive: boolean = false;

  //Table_Search
  searchText;
  tableSrachData:any;

  constructor(private service:CommonService) { }

  ngOnInit(): void {


    //Table_Search
    this.tableSrachData = this.service.getSearchTableData();
  }

  //Custom_Dropdown
  customDropdownClicked(){
    console.log("Dropdown Clicked");
    this.suggestionBoxActive = true;
  }
  customDropdownChanged(){
    console.log("Dropdown Changed");
    this.suggestionBoxActive = false;
  }
  customDropdownTyped(){
    console.log("Typed in custom Dropdown");
    this.suggestionBoxActive = true;
  }
  customDropdownFocused(){
    console.log("Custom Dropdown Focused");
    this.suggestionBoxActive = true;
  }
  customDropdownBlur(){
    console.log("Dropdown Blured");
    this.suggestionBoxActive = false;
  }
}
