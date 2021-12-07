import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './info-page/info-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "update",
    component: ModifyPageComponent
  },
  {
    path: "info",
    component: InfoPageComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
