import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeFacade } from 'src/app/store/employee-facade';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../model/app-state.model';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  showUpdateForm: boolean = false;
  employeeList: Observable<Array<Employee>>;
  newEmployee: Employee = { id: 0, first_name: "", last_name: "", email: "", avatar: "../assets/images/user.png" };
  editEmployee: Employee = { id: 0, first_name: "", last_name: "", email: "", avatar: "../assets/images/user.png" };


  pagination;
  constructor(private store: Store<AppState>, private employeeFacade: EmployeeFacade) { }

  ngOnInit() {
    this.employeeList = this.store.select(store => store.employee.list);
    
    this.employeeFacade.loadEmployee();
  }

  removeEmployee(employee: Employee) {
    this.employeeFacade.deleteEmployee(employee.id);
  }

  addEmployee() {
    this.newEmployee.id = uuid();
    this.employeeFacade.addEmployee(this.newEmployee);
    this.newEmployee = { id: 0, first_name: "", last_name: "", email: "", avatar: "../assets/images/user.png" };
  }

  edit(employee: Employee) {
    this.editEmployee.id = employee.id;
    this.editEmployee.avatar = employee.avatar;
    this.editEmployee.first_name = employee.first_name;
    this.editEmployee.last_name = employee.last_name;
    this.editEmployee.email = employee.email;
    this.showUpdateForm = true;
  }

  close() {
    this.showUpdateForm = false;
  }

  updateEmployee(employee) {
    this.employeeFacade.updateEmployee(employee)
    this.close();
    this.editEmployee = { id: 0, first_name: "", last_name: "", email: "", avatar: "../assets/images/user.png" };
  }
}