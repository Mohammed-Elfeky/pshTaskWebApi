import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { startWithNumber } from 'src/app/CustomValidators/startWithNumber';
import { employeeAge } from 'src/app/CustomValidators/employeeAgeLessThan';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/models/Department';
import { Employee, EmployeePost } from 'src/app/models/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageUploaderService } from 'src/app/services/image-uploader.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})

export class AddEditEmployeeComponent implements OnInit {
  constructor(
    private empService: EmployeesService,
    private DeptService: DepartmentsService,
    private route: ActivatedRoute,
    private router:Router,
    private imageUploaderService:ImageUploaderService
  ) { }

  deparments: Department[] = []
  employee!: Employee;
  profileForm!: FormGroup;
  submitted: boolean = false;
  empId: number = 0;
  uploadFile!: File;


  ngOnInit(): void {
    this.getDepts()
    this.extractIdFromRoute()
    this.createFormGroup()
    if(this.empId){
      this.getEmployeeData(this.empId)
    }
  }
  thisInputIsNotValidAndFormSubmitted(controlName: string) {
    return this.submitted && this.profileForm.controls[controlName].errors
  }

  createFormGroup() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.employee?.firstName || "", [Validators.required, Validators.minLength(3), startWithNumber]),
      lastName: new FormControl(this.employee?.lastName || "", [Validators.required, Validators.minLength(3), startWithNumber]),
      Phone: new FormControl(this.employee?.phone || "", [Validators.required, Validators.pattern('^01[0|1|2][0-9]{8}$')]),
      BirthDate: new FormControl(this.employee?.birthDate.toString().substring(0,10) || "", [Validators.required, employeeAge]),
      dept_id: new FormControl(this.employee?.dept_Id || 1)
    })
  }

  getDepts() {
    this.DeptService.getAllDepartments().subscribe(data => {
      this.deparments = data
    })
  }
  
  whensubmit() {
    this.submitted = true;
    if (this.profileForm.valid) {
      if(!this.empId){
        this.empService.addEmployee(this.fromFormToEmployee(this.profileForm)).subscribe(
            (data) => { 
              if(this.uploadFile){
                this.imageUploaderService.uploadImage(this.fillFormData(),data.id).subscribe()
              }
              this.router.navigate(["/show"])
            }
          )
        return;
      }
      this.empService.editEmployee(this.fromFormToEmployee(this.profileForm),this.empId).subscribe((data) => {
        if(this.uploadFile){
          this.imageUploaderService.uploadImage(this.fillFormData(),this.empId).subscribe()
        }
        this.router.navigate(["/show"])
       })
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
      this.createFormGroup()
    }
    )
  }

  whenFileSelect(e:any){
    this.uploadFile=e.target.files[0]
  }

  fillFormData():FormData{
    const formData = new FormData();
    formData.append(this.uploadFile.name+(""+Math.random()).substring(2), this.uploadFile);
    return formData; 
  }
}
