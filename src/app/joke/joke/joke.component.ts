import { Component, 
  Input, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  SimpleChanges, 
  OnDestroy, 
  ViewChildren,
  QueryList,
  ElementRef} from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {


  @Input("joke") data: Joke;

  show = false;

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {

    for(let key in changes){
      console.log(` currentValue setUp ${changes[key].currentValue.setUp}`)
      console.log(` currentValue puchline ${changes[key].currentValue.puchline}`)
      console.log(` previousValue ${changes[key].previousValue}`)
    }
  }
}
