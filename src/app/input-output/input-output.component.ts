import { User } from './../models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  constructor() { }

  ngOnInit() {
  }

  login(email:string, password:string){

    if(email && password){
      console.log(`Emmiting event `);
      this.enabled = true;
      const user = new User(email,password);
      this.loggedIn.emit(user);
    }
  }

}
