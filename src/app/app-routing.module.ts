import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/_auth/login/login.component';
import { RegisterComponent } from 'src/_auth/register/register.component';
import { CardComponent } from 'src/component/card/card.component';
import { WellsComponent } from 'src/component/wells/wells.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'card',component:CardComponent},
  {path:'wells',component:WellsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
