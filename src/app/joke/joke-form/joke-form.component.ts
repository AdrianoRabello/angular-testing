import { FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke';



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
      setup : this._formBuilder.control('',[]),
      punchline : this._formBuilder.control('',[]),
    })
  }

  addNewJoke(){
    this.newJokeEvent.emit(this.form.value);
  }

}
