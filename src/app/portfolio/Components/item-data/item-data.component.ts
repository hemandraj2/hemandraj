import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../../Services/common.service';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent implements OnInit {

  //Custom_Dropdown
  customDropdown: string;
  suggestionBoxActive: boolean = false;
  dropdownData: string[];
  dropdownDataTemp: string[];
  selectedValue: string;

  //Table_Search
  searchText;
  tableSrachData: any;

  constructor(private service: CommonService) { }

  ngOnInit(): void {

    //Custom_Dropdown
    this.dropdownData = this.service.getDropDownData();
    this.dropdownDataTemp = this.dropdownData;

    //Table_Search
    this.tableSrachData = this.service.getSearchTableData();
  }

  //Custom_Dropdown
  customDropdownClicked() {
    console.log("Dropdown Clicked");
    this.suggestionBoxActive = true;
  }
  customDropdownChanged() {
    console.log("Dropdown Changed");
    this.suggestionBoxActive = false;
  }
  customDropdownTyped() {
    console.log("Typed in custom Dropdown");
    this.dropdownDataTemp = this.dropdownData.filter(a => ((a.toUpperCase()).includes(this.customDropdown.toUpperCase())));
    this.suggestionBoxActive = true;
  }
  customDropdownFocused() {
    console.log("Custom Dropdown Focused");
    this.suggestionBoxActive = true;
  }
  customDropdownInputBlur() {
    console.log("Dropdown Input Blured");
    setTimeout(() => {
      if (this.selectedValue == this.customDropdown) {
        this.suggestionBoxActive = false;
      }
    }, 500);
  }
  itemClicked(data) {
    console.log("Item Clicked");
    this.customDropdown = data;
    this.selectedValue = data
    this.suggestionBoxActive = false;
  }
}
