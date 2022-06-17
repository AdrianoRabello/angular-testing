import { Joke } from './../joke-form/joke-form.component';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class JokePageComponent implements OnInit {

  private id = 0;
  @Output() jokes:Joke[] = [];

  constructor() { }

  ngOnInit() {
  }

  addJoke(joke:Joke){
    this.jokes.push(joke);
  }

  destroyJokes(){
    this.jokes = [];
  }






}
