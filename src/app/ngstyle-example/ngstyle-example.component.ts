import { Person } from './../models/person';
import { UserService } from './../services/user-service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-example',
  templateUrl: './ngstyle-example.component.html',
  styleUrls: ['./ngstyle-example.component.css']
})
export class NgstyleExampleComponent implements OnInit {

  people: Person[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPeopleForTest().subscribe(
      (response) => {
        this.people = response;
      })
  }

  getCssColor(person: Person): string {

    switch (person.age) {
      case (10):
        return 'green';
      case (20):
        return 'yellow';
      case (30):
        return 'red';
      default:
        return 'black';
    }
  }

}
