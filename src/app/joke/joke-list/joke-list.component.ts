import { Joke } from './../joke-form/joke-form.component';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, OnChanges {


  @Input() jokes:Joke[] = [];
  @Output() removeEvent = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {

    console.log('changes ', changes)
  }

  removeJoke(joke:Joke){
    console.log("removing joke", joke)
    this.removeEvent.emit(joke);
  }


}
