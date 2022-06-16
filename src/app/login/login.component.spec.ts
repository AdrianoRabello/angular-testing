import { element } from 'protractor';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../services/auth/auth.service';
import { LoginComponent } from './login.component';


/** this class is for mock the real service, but is better to 
 * to user a mock of real service
 * 
 */

    /** @Tutorial */
    /** @tutorial We can test asynchronous functions using 
     * 
     * The Jamie done functon and spy callbacks
     * Angular async and whenStable functions
     * Angular fakeAsync and tick functions
     * 
     * */

class MockAuthService extends AuthService{

  isAuthenticated():any{
    return 'Mock';
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:AuthService;
  let el:DebugElement;
  let testbadService:AuthService;


  beforeEach(() => {
   
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers:[AuthService]
    })


    // create a instance of component with all injections
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService)
    el = fixture.debugElement.query(By.css('a'));
    testbadService = TestBed.get(AuthService)

  });

  afterEach(() => {
    component = null;
    service = null;
  })

  it('should create with login', () => {
    component.needsLogin = true;
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login')
    expect(component).toBeTruthy();
  });


  it('Button label with done ',(done)=> {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    let spy = spyOn(service,'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(()=> {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      done();
    });
  })

  it('Button label with async ', async()=> {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service,'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    fixture.whenStable().then(()=> {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });
  })

  it('Button label with tick here',fakeAsync(()=> {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service,'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();

    /** @tutorial tick() tick function will block to call service async function **/

    tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout')

  }));





});
