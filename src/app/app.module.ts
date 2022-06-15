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
    OverrideInjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
    
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
