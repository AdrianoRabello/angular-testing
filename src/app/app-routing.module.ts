import { ObservableComponent } from './observable/observable.component';
import { DirectivesPageComponent } from './directives/directives-page/directives-page.component';
import { NgstyleExampleComponent } from './ngstyle-example/ngstyle-example.component';
import { NgswitchExampleComponent } from './ngswitch-example/ngswitch-example.component';
import { FormComponent } from './form/form.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { UsingPipeComponent } from './using-pipe/using-pipe.component';
import { HomeComponent } from './home/home.component';
import { JokePageComponent } from './joke/joke-page/joke-page.component';
import { NgnonbindbleComponent } from './ngnonbindble/ngnonbindble.component';

export const routes: Routes = [
  {path: 'teste', component: AppComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'pipe', component: UsingPipeComponent},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'directives', component: DirectivesPageComponent},
  {path: 'form', component: FormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'joke', component: JokePageComponent},
  {path: 'switchcase', component: NgswitchExampleComponent},
  {path: 'ngstyle', component: NgstyleExampleComponent},
  {path: 'nonbindble', component: NgnonbindbleComponent},
  {path: 'observable', component: ObservableComponent},
  {path: '', redirectTo:'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
