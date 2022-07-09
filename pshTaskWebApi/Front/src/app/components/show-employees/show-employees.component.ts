import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  employees: Employee[] = []
  constructor(private empService: EmployeesService, private router: Router) { }
  ngOnInit(): void {
    this.empService
      .getAllEmployee()
      .subscribe(data => {
        this.employees = data;
      }
      )
    }

    deleteEmp(id: number) {
      if(confirm("are u sure You want to delete this item")){
        this.empService.deleteEmployee(id).subscribe(() => {
          this.ngOnInit()
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }
}
