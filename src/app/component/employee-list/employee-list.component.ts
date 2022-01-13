import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  @Input() employees: any

  @Output('removeEmployee')
  removeEmployeeEmitter = new EventEmitter<Employee>();

  removeEmployee(employee: Employee) {
    this.removeEmployeeEmitter.emit(employee);
  }
  
  @Output('edit')
  editEmployeeEmitter = new EventEmitter<Employee>();

  edit(employee: Employee) {
    this.editEmployeeEmitter.emit(employee);
  }
}
