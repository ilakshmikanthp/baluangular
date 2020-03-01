import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectFormComponent } from './create-project-form/create-project-form.component';
import { AddModuleFormComponent } from './add-module-form/add-module-form.component';

const routes: Routes = [
  {path:'create',component:CreateProjectFormComponent},
  {path:'add',component:AddModuleFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
