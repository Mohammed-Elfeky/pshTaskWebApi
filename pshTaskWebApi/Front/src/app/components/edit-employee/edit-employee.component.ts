import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  empId: number = 0;

  constructor(private route: ActivatedRoute, private empService: EmployeesService) { console.log("ctor") }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.route.params.subscribe(params => {
      this.empId = params["id"];

      // this.empService.getEmployee(this.empId).subscribe(data=>{console.log(data)},
      // err=>{console.log(err.status)}
      // )

      // this.empService.editEmployee({
      //   firstName: "wwwwwwwwwwwwedit",
      //   lastName: "wwwwwwwwwwwedit",
      //   Phone: "76986986",
      //   BirthDate: new Date(),
      //   Image: "lkjlj",
      //   dept_id: 3
      // }, 5).subscribe(data=>{
      //   console.log(data)
      // })

      this.empService.deleteEmployee(5).subscribe(data=>{
        console.log(data)
      })
    });
  }
}
