import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { CommonService } from '../../../Services/common.service';

@Component({
  selector: 'app-item-data',
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(25%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(25%)', opacity: 0 }))
      ])
    ]
    )
  ],
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent implements OnInit {

  //Multiselect_Dropdown
  multiDropdown: string;
  multiBoxActive: boolean = false;
  multidropdownData: string[];
  multidropdownDataTemp: string[];
  multiselectedValue = [];
  lastMultiSelected: string;

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
    this.multidropdownData = this.service.getDropDownData();
    this.multidropdownDataTemp = this.multidropdownData;

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

  //Multiselect_Dropdown
  multiDropdownClicked() {
    console.log("Dropdown Clicked");
    this.multiBoxActive = true;
  }
  multiDropdownChanged() {
    console.log("Dropdown Changed");
    this.multiBoxActive = false;
  }
  multiDropdownTyped() {
    console.log("Typed in custom Dropdown");
    this.multidropdownDataTemp = this.multidropdownData.filter(a => ((a.toUpperCase()).includes(this.multiDropdown.toUpperCase())));
    this.multiBoxActive = true;
  }
  multiDropdownFocused() {
    console.log("Custom Dropdown Focused");
    this.multiBoxActive = true;
  }
  multiDropdownInputBlur() {
    console.log("Dropdown Input Blured");
    setTimeout(() => {
      if (this.lastMultiSelected == this.multiDropdown) {
        this.multiBoxActive = false;
      }
    }, 500);
  }
  multiItemClicked(data) {
    console.log("Item Clicked");
    this.multiDropdown = "";
    this.lastMultiSelected = data;
    this.multiselectedValue.push(data);
    this.multiBoxActive = false;
  }
}
