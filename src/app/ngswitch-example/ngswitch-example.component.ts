import { Person } from './../models/person';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-example',
  templateUrl: './ngswitch-example.component.html',
  styleUrls: ['./ngswitch-example.component.css']
})
export class NgswitchExampleComponent implements OnInit {

  people:Person[] = [
    {
      name:'kid',
      age:10
    },
    {
      name:'young',
      age:15
    },
    {
      name:'adult',
      age:21
    },   {
      name:'old',
      age:65
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
