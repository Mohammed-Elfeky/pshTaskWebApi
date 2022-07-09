import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './components/addAndUpdateEmployee/add-edit-employee.component';
import { NotFonudComponent } from './components/not-fonud/not-fonud.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { ShowOneEmployeeComponent } from './components/show-one-employee/show-one-employee.component';
import { SomeThingWrongComponent } from './components/some-thing-wrong/some-thing-wrong.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: "", redirectTo: "show", pathMatch: "full" },
  { path: "show", component: ShowEmployeesComponent,canActivate:[AuthGuard] },
  { path: "show/:id", component: ShowOneEmployeeComponent ,canActivate:[AuthGuard]},
  {
    path: "add",
    component: AddEditEmployeeComponent,
    canActivate:[AuthGuard]
  },
  { path: "edit/:id", component: AddEditEmployeeComponent,canActivate:[AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "someThingWrong", component: SomeThingWrongComponent },
  { path: "**", component: NotFonudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
