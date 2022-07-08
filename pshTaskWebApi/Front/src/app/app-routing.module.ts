import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NotFonudComponent } from './components/not-fonud/not-fonud.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { ShowOneEmployeeComponent } from './components/show-one-employee/show-one-employee.component';
import { SomeThingWrongComponent } from './components/some-thing-wrong/some-thing-wrong.component';

const routes: Routes = [
  {path:"",redirectTo:"show",pathMatch:"full"},
  {path:"show",component:ShowEmployeesComponent},
  {path:"show/:id",component:ShowOneEmployeeComponent},
  {path:"add",component:AddEmployeeComponent},
  {path:"edit/:id",component:AddEmployeeComponent},
  {path:"someThingWrong",component:SomeThingWrongComponent},
  {path:"**",component:NotFonudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
