import { Joke } from 'src/app/models/joke';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.css']
})
export class DirectivesPageComponent implements OnInit {

  data =   new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)");
  constructor() { }

  ngOnInit() {
  }

}
