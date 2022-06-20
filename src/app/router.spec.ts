import { JokeFormComponent } from './joke/joke-form/joke-form.component';
import { JokePageComponent } from './joke/joke-page/joke-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsingPipeComponent } from './using-pipe/using-pipe.component';
import { Location } from "@angular/common";
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UrlPipe } from './pipes/url/url.pipe';
import { SearchMusicComponent } from './search-music/search-music.component';
import { TrackItemComponent } from './track-item/track-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { FormComponent } from './form/form.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { OverrideInjectsComponent } from './override-injects/override-injects.component';
import { AngularMaterialModule } from './angular-material.module';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('Router: app',()=> {

    let location:Location;
    let router:Router;
    let fixture;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), AngularMaterialModule, FormsModule,ReactiveFormsModule,BrowserAnimationsModule],
            declarations: [AppComponent,  
                SearchMusicComponent,
                TrackItemComponent,
                CreateUserComponent,
                UserListComponent,
                LoginComponent,
                UrlPipe,
                UsingPipeComponent,
                OverrideInjectsComponent,
                InputOutputComponent,
                DirectivesComponent,
                HoverFocusDirective,
                HighlightDirective,
                JokePageComponent,
                JokeListComponent,
                JokeFormComponent,
                JokePageComponent,
                FormComponent,
                HomeComponent,
                CreateUserComponent],
                schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        })

        router      = TestBed.get(Router);
        location    = TestBed.get(Location);
        fixture     = TestBed.createComponent(AppComponent);
        router.initialNavigation();

    });

    it('navigate to "" redirects to /home ', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/home')
    }))

    it('should navigate to form', fakeAsync(()=>{
        router.navigate(['form']);
        tick();
        expect(location.path()).toBe('/form')
    }))

    it('it should navigate to create-user path',fakeAsync(()=> {
        router.navigate(['create-user']);
        tick();
        expect(location.path()).toBe('/create-user');
    }))

})