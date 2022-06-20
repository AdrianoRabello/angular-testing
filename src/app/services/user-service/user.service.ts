import { Person } from './../../models/person';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/create-user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private usersArray: User[] = [];
  private people: Person[] = [
    {
      name:'name1',
      age: 10
    },
    {
      name:'name2',
      age: 20
    },
    {
      name:'name3',
      age: 30
    },
  ]
  private usersSubjects = new BehaviorSubject<User[]>(null);

  constructor() {

  }

  getUsers(): Observable<User[]> {
    return this.usersSubjects.asObservable();
  }

  getPeopleForTest():Observable<Person[]>{

    return of(this.people);
  }
  addUser(user: User): void {
    this.usersArray.push(user);
    this.usersSubjects.next(this.usersArray);
    console.log(this.usersArray)
  }
}
