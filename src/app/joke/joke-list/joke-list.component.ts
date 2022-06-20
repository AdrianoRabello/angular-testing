import { Component, Input, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})

export class JokeListComponent implements OnInit, AfterContentInit, AfterViewInit {
  jokes: Joke[] = [
    new Joke(
      "What did the cheese say when it looked in the mirror",
      "Hello-me (Halloumi)"
    ),
    new Joke(
      "What kind of cheese do you use to disguise a small horse",
      "Mask-a-pony (Mascarpone)"
    )
  ];

  @ViewChild(JokeComponent,null) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header",null) headerEl: ElementRef;
  @ContentChild(JokeComponent,null) jokeContentChild: JokeComponent;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngOnInit() {
  }


  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`
    );
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);

    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }



}
