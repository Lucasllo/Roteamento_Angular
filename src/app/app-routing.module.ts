import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

const routes: Routes = [
  {path:"c1", component:C1Component},
  {path:"", redirectTo:"c1", pathMatch:"full"},
  {path:"c2/:id", component:C2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
