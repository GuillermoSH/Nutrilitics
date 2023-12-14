import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, data: { title: "Nutrilitics" } },
  //{ path: "login", component: LoginComponent, data: { title: "CVOrotava - Log In" } },
  //{ path: "error...", component: NotFoundComponent, data: { title: "Vaya..." } },
  { path: "**", redirectTo: "error..." }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
