import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { AuthService } from '../services/auth/auth.service';

import { OverrideInjectsComponent } from './override-injects.component';




/**  */


class MockAuthService extends AuthService {

  isAuthenticated(): Promise<any> {
    return Promise.resolve('MockService');
  }
}

describe('OverrideInjectsComponent', () => {
  let component: OverrideInjectsComponent;
  let fixture: ComponentFixture<OverrideInjectsComponent>;
  let authService: AuthService;
  let componentService: AuthService



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverrideInjectsComponent],
      providers: [AuthService]
    })


    TestBed.overrideComponent(
      OverrideInjectsComponent,
      { set: { providers: [{ provide: AuthService, useClass: MockAuthService }] } }
    )

    fixture = TestBed.createComponent(OverrideInjectsComponent);
    component = fixture.componentInstance;

      // AuthService provided by TestBed 
    authService = TestBed.get(AuthService);

    // AuthService provided by Component, this return a MockService instance
    componentService = fixture.debugElement.injector.get(AuthService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  @tutorial Inject if i want to inject service by my own  **/
  it('sould inject via inject(...) and TestBed.get(...) should be the same instance',
    inject([AuthService], (injectService: AuthService) => {
      expect(injectService).toEqual(authService);
    }))

  it('Service injected via component should be and instance of MockService', () => {
    expect(componentService instanceof MockAuthService).toBeTruthy();
  })


});
