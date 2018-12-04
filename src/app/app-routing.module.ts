import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

const routes: Routes = [
  {path:'custom-pipe', component: CustomPipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
