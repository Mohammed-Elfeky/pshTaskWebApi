import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-show-one-employee',
  templateUrl: './show-one-employee.component.html',
  styleUrls: ['./show-one-employee.component.css']
})
export class ShowOneEmployeeComponent implements OnInit {

  empId:number=0;
  emp!:Employee;
  constructor(private route: ActivatedRoute,private empService:EmployeesService ) {  }
  
  ngOnInit(): void {
    console.log("ngOnInit")
    this.route.params.subscribe(params => {
      this.empId=params["id"];

      this.empService.getEmployee(this.empId).subscribe(
        data=>{
          this.emp=data;
        },
        err=>{console.log(err.status)}
      )
    });
  }


}
