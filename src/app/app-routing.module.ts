import { FormComponent } from './form/form.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { UsingPipeComponent } from './using-pipe/using-pipe.component';
import { HomeComponent } from './home/home.component';
import { JokeFormComponent } from './joke/joke-form/joke-form.component';
import { JokePageComponent } from './joke/joke-page/joke-page.component';

export const routes: Routes = [
  {path: 'teste', component: AppComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'pipe', component: UsingPipeComponent},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'form', component: FormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'joke', component: JokePageComponent},
  {path: '', redirectTo:'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
