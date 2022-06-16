import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { AngularMaterialModule } from '../angular-material.module';
import { UserService } from '../services/user-service/user.service';

import { CreateUserComponent } from './create-user.component';
import { User } from './user';


class MockUserService {
  
  users:User[] = [];

  addUser(user:User){
    this.users.push(user);
  }
  getUsers(){
    return of(this.users);
  }
}

describe('CreateUserComponent', () => {

  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let userService:UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule,BrowserAnimationsModule,ReactiveFormsModule],
      declarations: [ CreateUserComponent ],
      providers: [ {provide:UserService, useClass:MockUserService}]
    })

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
 



});
