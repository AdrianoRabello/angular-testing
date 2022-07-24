import { Router, Routes } from '@angular/router';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { NavigateComponent } from './navigate.component';
import { RouterTestingModule } from '@angular/router/testing';


const routes:Routes = [
  {path: 'navigate', component: NavigateComponent}
]

describe('NavigateComponent', () => {
  let component: NavigateComponent;
  let fixture: ComponentFixture<NavigateComponent>;
  let router:Router
  let injector: TestBed;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateComponent],
      imports: [  RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = injector.createComponent(NavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should navigate to observable route`, () => {

    spyOn(router,'navigate')
    const navigateLink = fixture.nativeElement.querySelector('.navigate-link');
    navigateLink.click();
    expect(router.navigate).toHaveBeenCalledWith(['/navigate'])

  })
});
