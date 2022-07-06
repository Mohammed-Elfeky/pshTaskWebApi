import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-show-one-employee',
  templateUrl: './show-one-employee.component.html',
  styleUrls: ['./show-one-employee.component.css']
})
export class ShowOneEmployeeComponent implements OnInit {

  empId:number=0;

  constructor(private route: ActivatedRoute,private empService:EmployeesService ) { console.log("ctor") }
  
  ngOnInit(): void {
    console.log("ngOnInit")
    this.route.params.subscribe(params => {
      this.empId=params["id"];

      this.empService.getEmployee(this.empId).subscribe(data=>{console.log(data)},
      err=>{console.log(err.status)}
      )
    });
  }


}
