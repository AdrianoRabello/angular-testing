import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SearchMusicComponent } from './search-music/search-music.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackItemComponent } from './track-item/track-item.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AngularMaterialModule } from './angular-material.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user-service/user.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth/auth.service';
import { UsingPipeComponent } from './using-pipe/using-pipe.component';
import { UrlPipe } from './pipes/url/url.pipe';
import { OverrideInjectsComponent } from './override-injects/override-injects.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DirectivesComponent } from './directives/directives.component';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { FormComponent } from './form/form.component';
import { SearchService } from './services/search/search.service';
import { HomeComponent } from './home/home.component';
import { JokeFormComponent } from './joke/joke-form/joke-form.component';
import { JokePageComponent } from './joke/joke-page/joke-page.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { JokeComponent } from './joke/joke/joke.component';
import { NgswitchExampleComponent } from './ngswitch-example/ngswitch-example.component';
import { NgstyleExampleComponent } from './ngstyle-example/ngstyle-example.component';
import { NgnonbindbleComponent } from './ngnonbindble/ngnonbindble.component';
import { DirectivesPageComponent } from './directives/directives-page/directives-page.component';
import { BackgroundDirective } from './directives/background.directive';
import { DisplayblockDirective } from './directives/displayblock.directive';
import { CardHoverDirective } from './directives/card-hover.directive';
import { ObservableComponent } from './observable/observable.component';
import { PostsService } from './services/posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
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
    FormComponent,
    HomeComponent,
    CreateUserComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent,
    JokePageComponent,
    NgswitchExampleComponent,
    NgstyleExampleComponent,
    NgnonbindbleComponent,
    DirectivesPageComponent,
    BackgroundDirective,
    DirectivesPageComponent,
    BackgroundDirective,
    DisplayblockDirective,
    CardHoverDirective,
    ObservableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    
  ],
  providers: [UserService, AuthService, SearchService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
