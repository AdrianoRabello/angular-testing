import { UserService } from './../services/user-service/user.service';
import { Person } from './../models/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngnonbindble',
  templateUrl: './ngnonbindble.component.html',
  styleUrls: ['./ngnonbindble.component.css']
})
export class NgnonbindbleComponent implements OnInit {

  people: Person[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPeopleForTest().subscribe(
      (response) => {
        this.people = response;
      })
  }

}
