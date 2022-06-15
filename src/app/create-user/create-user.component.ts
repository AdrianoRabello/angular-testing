import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { User } from './user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  userForm;
  users:User[] = [];


  constructor(private _userService:UserService, private _formBuilder:FormBuilder) {

    this.userForm = this._formBuilder.group({
      name:this._formBuilder.control('', []),
      email: this._formBuilder.control('', [])
    })
   }

  ngOnInit() {

      this._userService.getUsers().subscribe((response)=> {
        this.users = response
      })

  }


  addUser(){
    console.log("values ", this.userForm.value)

    this._userService.addUser(this.userForm.value);
  }


}
