import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
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
  getUsers():Observable<User[]>{
    return of(this.users);
  }
}

describe('CreateUserComponent', () => {

  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let userService:UserService;
  let email:FormControl
  let name:FormControl
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule,BrowserAnimationsModule,ReactiveFormsModule],
      declarations: [ CreateUserComponent ],
      providers: [ {provide:UserService, useClass:MockUserService}]
    })

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);

    
    name = (<FormControl> component.userForm.controls['name']);
    email=(<FormControl> component.userForm.controls['email']);
  });


  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


  it('should add user ',()=>{

    spyOn(userService,'addUser').and.callFake;

    name.setValue('teste1');
    email.setValue('example@gmail.com');

    component.addUser();
    fixture.detectChanges();
    expect(userService.addUser).toHaveBeenCalled();

  })

  it('should not call userservice with add user mthos becouse userform is not valid',()=> {
    fixture.detectChanges();
    spyOn(userService,'addUser').and.callFake
    component.addUser();
    expect(userService.addUser).toHaveBeenCalledTimes(0);



  })
 



});
