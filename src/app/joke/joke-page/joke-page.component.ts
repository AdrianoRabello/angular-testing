import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class JokePageComponent implements OnInit {

  @Input() joke: Joke = new Joke('teste','rese');
  private id = 0;
  @Output() jokes:Joke[] = [];
  @ViewChild('header',null)header:ElementRef;

  constructor() { }

  ngOnInit() {

    this.header.nativeElement.textContent = 'inside ts file'
  }

  addJoke(joke:Joke){
    this.jokes.push(joke);
  }

  destroyJokes(){
    this.jokes = [];
  }






}
