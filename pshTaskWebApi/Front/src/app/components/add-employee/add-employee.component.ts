import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
import { startWithNumber } from 'src/app/CustomValidators/startWithNumber';
import { employeeAge } from 'src/app/CustomValidators/employeeAgeLessThan';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/models/Department';
import { Employee, EmployeePost } from 'src/app/models/Employee';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private empService: EmployeesService,
    private DeptService: DepartmentsService,
    private route: ActivatedRoute
  ) { }

  deparments: Department[] = []
  employee!: Employee;
  profileForm!: FormGroup;
  submitted: boolean = false;
  empId: number = 0;


  ngOnInit(): void {
    this.getDepts()
    this.extractIdFromRoute()
    this.createFormGroup()
    if(this.empId){
      this.getEmployeeData(this.empId)
    }
  }


  whenSubmit() {
    this.submitted = true;
    console.log(this.profileForm)
  }

  thisInputIsNotValidAndFormSubmitted(controlName: string) {
    return this.submitted && this.profileForm.controls[controlName].errors
  }

  createFormGroup() {
    this.profileForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3), startWithNumber]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3), startWithNumber]),
      Phone: new FormControl("", [Validators.required, Validators.pattern('^01[0|1|2][0-9]{8}$')]),
      BirthDate: new FormControl("", [Validators.required, employeeAge]),
      dept_id: new FormControl()
    })
  }

  getDepts() {
    this.DeptService.getAllDepartments().subscribe(data => {
      this.deparments = data
    })
  }
  
  whensubmit() {
    if (this.profileForm.valid) {
      if(!this.empId){
        this.empService.addEmployee(this.fromFormToEmployee(this.profileForm)).subscribe(() => { })
        this.createFormGroup()
        return;
      }
      this.empService.editEmployee(this.fromFormToEmployee(this.profileForm),this.empId).subscribe(() => { })
      this.createFormGroup()
    }
  }

  whenChange(id: any) {
    this.profileForm.controls["dept_id"].setValue(id.target.value)
  }

  fromFormToEmployee(employeeForm: FormGroup): EmployeePost {
    return {
      firstName: employeeForm.value["firstName"],
      lastName: employeeForm.value["lastName"],
      Phone: employeeForm.value["Phone"],
      BirthDate: employeeForm.value["BirthDate"],
      Image: "",
      dept_id: employeeForm.value["dept_id"]
    }
  }

  extractIdFromRoute(): any {
    this.route.params.subscribe(params => {
      this.empId=params["id"];
    });
  }

  getEmployeeData(id: number) {
    this.empService.getEmployee(id).subscribe(data => {
      this.employee = data
      console.log(this.employee)
      this.profileForm = new FormGroup({
        firstName: new FormControl(this.employee.firstName, [Validators.required, Validators.minLength(3), startWithNumber]),
        lastName: new FormControl(this.employee.lastName, [Validators.required, Validators.minLength(3), startWithNumber]),
        Phone: new FormControl(this.employee.phone, [Validators.required, Validators.pattern('^01[0|1|2][0-9]{8}$')]),
        BirthDate: new FormControl(this.employee.birthDate.toString().substring(0,10), [Validators.required, employeeAge]),
        dept_id: new FormControl(this.employee.dept_Id)
      })
    })
  }
}
