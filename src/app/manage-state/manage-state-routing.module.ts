import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageStateComponent } from "./manage-state/manage-state.component";
import { FruitDetailComponent } from "./manage-state/fruit-detail/fruit-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ManageStateComponent,
    children: [
      {
        path: 'detail/:fruitId',
        component: FruitDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageStateRoutingModule {}
