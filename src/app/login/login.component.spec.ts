import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../services/auth/auth.service';
import { LoginComponent } from './login.component';


/** this class is for mock the real service, but is better to 
 * to user a mock of real service
 * 
 */

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:AuthService;
  let el:DebugElement;


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

  });

  afterEach(() => {
    component = null;
    service = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The user needs to login',()=> {
    spyOn(service,'isAuthenticated').and.returnValue(false)
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled()
  })


  it('should return false when user is authenticated',()=> {
    spyOn(service,'isAuthenticated').and.returnValue(true)
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled()

  })

  it('login button hidden when user is authenticated',() => {

    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service,'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');

  })

  it('Login botton hiddem when the user is authenticated',()=> {
    spyOn(service,'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toContain('Logout'); 

  })


});
