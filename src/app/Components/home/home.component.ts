import { Component, OnInit } from '@angular/core';

import Typewriter from 'typewriter-effect/dist/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Typewriter('#typewriter', {
      strings: ['Full Stack Developer', 'UI Designer'],
      autoStart: true,
      loop: true,
      delay: 100,
      deleteSpeed: 50,

    });
  }

}
