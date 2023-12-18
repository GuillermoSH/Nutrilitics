import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: "", component: IndexComponent, children: [
    {path: "", component: WelcomeComponent, data: {title: "Nutrilitics"}}
  ]},
  //{ path: "login", component: LoginComponent, data: { title: "CVOrotava - Log In" } },
  //{ path: "error...", component: NotFoundComponent, data: { title: "Vaya..." } },
  { path: "**", redirectTo: "error..." }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
