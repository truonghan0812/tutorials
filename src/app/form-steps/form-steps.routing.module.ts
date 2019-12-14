import { FormStepsComponent } from "./form-steps.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormStep1Component } from "./form-step1/form-step1.component";
import { FormStep2Component } from "./form-step2/form-step2.component";
import { FormStep3Component } from "./form-step3/form-step3.component";

const routes: Routes = [
  {
    path: "",
    component: FormStepsComponent,
    children: [
      {
        path: "step-1",
        component: FormStep1Component
      },
      {
        path: "step-2",
        component: FormStep2Component
      },
      {
        path: "step-3",
        component: FormStep3Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormStepsRoutingModule {}
