import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddEmployee, LoadEmployee, RemoveEmployee, UpdateEmployee } from './actions';
import { AppState } from '../model/app-state.model';
import { Employee } from '../model/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeFacade {

  constructor(private store: Store<AppState>) {}
  
  loadEmployee() {
    this.store.dispatch(new LoadEmployee());
  }

  addEmployee(employee:Employee){
    this.store.dispatch(new AddEmployee(employee));
  }

  deleteEmployee(id){
    this.store.dispatch(new RemoveEmployee(id));
  }

  updateEmployee(employee:Employee){
    this.store.dispatch(new UpdateEmployee(employee));
  }

}
