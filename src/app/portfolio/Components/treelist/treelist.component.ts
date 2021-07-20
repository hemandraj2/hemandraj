import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treelist',
  templateUrl: './treelist.component.html',
  styleUrls: ['./treelist.component.css']
})
export class TreelistComponent implements OnInit {

  listStructure: any = [];
  currentList: any = [];
  path: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeList();
  }

  initializeList() {
    this.listStructure = [
      {
        "id": 1,
        "name": "PORTFOLIO",
        "sub_cat": [
          {
            "id": 11,
            "name": "RESUME MODEL",
            "sub_cat": [
              {
                "id":111,
                "name": "RESUME MODEL inner1",
                "sub_cat": [
                  {
                    "id":1111,
                    "name": "RESUME MODEL inner2",
                    "sub_cat": [
                      {
                        "id":11111,
                        "name": "RESUME MODEL inner3",
                        "sub_cat": [
                          {
                            "id":111111,
                            "name": "RESUME MODEL inner4",
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": 12,
            "name": "ABOUT MODEL"
          },
          {
            "id": 13,
            "name": "CONTACT MODEL",
            "sub_cat": [
              {
                "id":131,
                "name": "RESUME MODEL inner",
                "sub_cat": [
                  {
                    "id":1311,
                    "name": "RESUME MODEL inner",
                    "sub_cat": [
                      {
                        "id":13111,
                        "name": "RESUME MODEL inner",
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": 14,
            "name": "HOME MODEL"
          },
          {
            "id": 15,
            "name": "SINGLE PAGE"
          }
        ]
      },
      {
        "id": 2,
        "name": "SOLUTIONS",
        "sub_cat": [
          {
            "id": 21,
            "name": "SINGLE PAGE"
          }
        ]
      }
    ];
    this.currentList = this.listStructure;
  }

  cardTraverse(id) {
    for (let i = 0; i < this.currentList.length; i++) {
      if (this.currentList[i].id === id) {
        this.path.push({ "id": this.currentList[i].id, "name": this.currentList[i].name });
        if (this.currentList[i].sub_cat) {
          this.currentList = this.currentList[i].sub_cat;
        }
        else {
          this.router.navigate(['item-data'])
        }
      }
    }
    console.log(this.path)
  }

  specificTraverse(id) {
    let flag = true;
    let temp = id.toString();
    let tempArray = [];
    for (var i = 0, len = temp.length; i < len; i += 1) {
      tempArray.push(+temp.charAt(i));
    }
    console.log(tempArray)
    tempArray = tempArray.reverse();
    console.log(tempArray)

  //   for (let i = 0; i < traverse_data.length; i++) {
  //     if (traverse_data[i].sub_cat) {
  //       if (traverse_data[i].id == id) {
  //         if (this.currentList[i].sub_cat) {
  //           this.currentList = this.currentList[i].sub_cat;
  //         }
  //         else {
  //           this.router.navigate(['item-data'])
  //         }
  //         flag = false;
  //       }
  //       else {
  //         traverse_data = traverse_data[i].sub_cat;
  //       }
  //     }
  //     else {
  //       traverse_data = traverse_data[i].sub_cat = null;
  //       traverse_data = this.listStructure;
  //       break;
  //     }
  //   }
  // }
  }


}
