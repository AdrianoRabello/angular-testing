import { DirectivesComponent } from './directives/directives.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { UsingPipeComponent } from './using-pipe/using-pipe.component';

export const routes: Routes = [
  {path: 'teste', component: AppComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'pipe', component: UsingPipeComponent},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
