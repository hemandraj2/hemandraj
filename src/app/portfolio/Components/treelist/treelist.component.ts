import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treelist',
  templateUrl: './treelist.component.html',
  styleUrls: ['./treelist.component.css']
})
export class TreelistComponent implements OnInit {

  listStructure: any = [];
  currentList: any = [];
  path: any = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeList();
  }

  initializeList() {
    this.listStructure = [
      { "id": "Level-000", "name": "PORTFOLIO", "sub_cat": [{ "id": "Level-001", "name": "RESUME MODEL","sub_cat":{"id":"Level-"} }, { "id": "Level-002", "name": "ABOUT MODEL" }, { "id": "Level-003", "name": "CONTACT MODEL" }, { "id": "Level-004", "name": "HOME MODEL" }, { "id": "Level-005", "name": "SINGLE PAGE" }] },
      { "id": "Level-100", "name": "SOLUTIONS", "sub_cat": [{ "id": "Level-101", "name": "SINGLE PAGE" }] }
    ];
    this.currentList = this.listStructure;
  }

  cardTraverse(id) {
    for (let i = 0; i < this.currentList.length; i++) {
      if (this.currentList[i].id === id) {
        this.path.push(this.currentList[i].name);
        this.currentList = this.currentList[i].sub_cat;
      }
    }
  }

}
