import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/create-user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private usersArray:User[] = [];
  private usersSubjects = new BehaviorSubject<User[]>(null);

  constructor() {

   }

   getUsers():Observable<User[]>{
    return this.usersSubjects.asObservable();
   }

   addUser(user:User):void{
    this.usersArray.push(user);
    this.usersSubjects.next(this.usersArray);
    console.log(this.usersArray)
   }
}
