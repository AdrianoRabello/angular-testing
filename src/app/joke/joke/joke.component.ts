import { Joke } from './../joke-form/joke-form.component';
import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked, OnDestroy {


  @Input() joke:Joke;

  show = false;

  constructor() { }

  ngOnInit() {
  }

  toogleData(){
    console.log('toogleData')
    this.show = !this.show;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');

    for(let key in changes){
      console.log(` currentValue setUp ${changes[key].currentValue.setUp}`)
      console.log(` currentValue puchline ${changes[key].currentValue.puchline}`)
      console.log(` previousValue ${changes[key].previousValue}`)
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void {
      console.log("ngOndestroy")
  }



}
