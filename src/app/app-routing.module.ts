import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  {path:'', component: MembershipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
