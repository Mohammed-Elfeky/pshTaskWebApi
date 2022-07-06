import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  employees:Employee[]=[]
  constructor(private empService:EmployeesService) { }

  ngOnInit(): void {
    this.empService.getAllEmployee().subscribe(data=>{
      console.log(data)
    })
  }

}
