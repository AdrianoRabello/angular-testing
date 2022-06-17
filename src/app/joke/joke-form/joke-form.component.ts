import { FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';


export class Joke{
  setUp:string;
  puchline:string;

}

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
 
})
export class JokeFormComponent implements OnInit {


  form;
  @Output() newJokeEvent = new EventEmitter<Joke>();

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      setUp : this._formBuilder.control('',[]),
      puchline : this._formBuilder.control('',[]),
    })
  }

  addNewJoke(){
    this.newJokeEvent.emit(this.form.value);
  }

}
