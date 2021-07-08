import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  expertise:any;
  experience:any;

  constructor() { }

  ngOnInit(): void {
    this.expertise = [
      {"name":"Angular 2+","confidence":"90"},{"name":"HTML","confidence":"90"},
      {"name":"CSS","confidence":"90"},{"name":"Bootstrap","confidence":"90"},
      {"name":"Javascript","confidence":"80"},{"name":"Java","confidence":"60"},
      {"name":"AWS","confidence":"40"},{"name":"Node JS","confidence":"40"}
    ];

    this.experience = [
      {"company":"Tata Consultancy Service","period":"Mar 2019 - Cont.","role":"Full Stack Developer"},
      {"company":"Perfomatix Solutions Pvt Ltd","period":"Nov 2018 - Feb 2019","role":"Software Engineer-Trainee"},
      {"company":"Cynber Infotech Pvt Ltd","period":"Aug 2018 - Oct 2019","role":"Java Developer-Trainee"}
    ];
  }

}
