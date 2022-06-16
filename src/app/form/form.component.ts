import { User } from './../models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;
  @Output() loggedIn = new EventEmitter<User>();

  constructor( private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      email: this._formBuilder.control('',[Validators.required,Validators.pattern('[^@]*@[^ @]*')]),
      password: this._formBuilder.control('',[Validators.required,Validators.minLength(6)])
    })
  }

  login(){

    console.log('formvalue ', this.form.value)
  }

}
