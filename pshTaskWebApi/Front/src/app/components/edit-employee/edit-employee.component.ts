import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  empId: number = 0;

  constructor(private route: ActivatedRoute, private empService: EmployeesService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.empId = params["id"];
    });
  }
}
