import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { AddEditEmployeeComponent } from './components/addAndUpdateEmployee/add-edit-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { SomeThingWrongComponent } from './components/some-thing-wrong/some-thing-wrong.component';
import { NotFonudComponent } from './components/not-fonud/not-fonud.component';
import { ShowOneEmployeeComponent } from './components/show-one-employee/show-one-employee.component';
import { NavComponent } from './components/nav/nav.component';
import { EmployeesService } from './services/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentsService } from './services/departments.service';
import { LoginComponent } from './components/login/login.component';




// base url dependency injection configration
export interface baseUrl{
  base:string
}
const theBase={
  base:"http://localhost:60309/api"
}
export const baseDependencyId=new InjectionToken<baseUrl>("BASE")






@NgModule({
  declarations: [
    AppComponent,
    ShowEmployeesComponent,
    AddEditEmployeeComponent,

    SomeThingWrongComponent,
    NotFonudComponent,
    ShowOneEmployeeComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeesService,
    DepartmentsService,
    {provide:baseDependencyId,useValue:theBase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
