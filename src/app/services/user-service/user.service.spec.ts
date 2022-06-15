import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth/auth.service';

import { UserService } from './user.service';

describe('UserService', () => {

  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  

  afterEach(()=> {
    localStorage.removeItem('token')
  })

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });



  // it('Should return true from IsAuthenticated when there is a token',(done) => {

  //   let spy = spyOn(service,'isAuthenticated').and.returnValue(Promise.resolve(true));

  //   spy.calls.mostRecent().returnValue.then(() => {

  //   })

  //   expect(service.isAuthenticated()).toBeTruthy()
  // })

  // it('should ne false fron isAuthenticated when there is no token ', () => {
  //   expect(service.isAuthenticated()).toBeFalsy();
  // })

});
