import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EmployeeActions, EmployeeLoaded, LoadEmployee ,AddEmployee, UpdateEmployee, AddSuccess, RemoveEmployee, RemoveSuccess, UpdateSuccess} from './actions';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/api/employee.service';
import { EMPTY } from 'rxjs';

// import { EmployeeActions, EmployeeLoaded, LoadEmployee } from '../actions/actions';
// import { EmployeeService } from '../../api/employee.service';
// import { DataPersistence } from '@nrwl/nx';
// import { Employee } from 'src/app/model/employee.model';
// import { BehaviorSubject, EMPTY } from 'rxjs';
@Injectable()
export class EmployeeEffects {
constructor(private actions :Actions,private employeeService : EmployeeService){}


   @Effect()
   loadEmployees$ = this.actions
   .pipe(
       ofType<LoadEmployee>(EmployeeActions.LoadEmployee),
       mergeMap(()=>this.employeeService.getAll()
       .pipe(
           map(data => new EmployeeLoaded(data)),
           catchError(error => EMPTY)
       ))
   )

   @Effect()
   addEmployee$ = this.actions
   .pipe(
       ofType<AddEmployee>(EmployeeActions.AddEmployee),
       concatMap((data)=>this.employeeService.addEmployee(data.payload)
       .pipe(
           map(() => new AddSuccess(data.payload)),
           catchError(error => EMPTY)
       ))
   )

   @Effect()
   removeEmployee$ = this.actions
   .pipe(
       ofType<RemoveEmployee>(EmployeeActions.RemoveEmployee),
       mergeMap((data)=>this.employeeService.deleteEmployee(data.payload)
       .pipe(
           map(() => new RemoveSuccess(data.payload)),
           catchError(error => EMPTY)
       ))
   )

   @Effect()
   updateEmployee$ = this.actions
   .pipe(
       ofType<UpdateEmployee>(EmployeeActions.UpdateEmployee),
       mergeMap((data)=>this.employeeService.updateEmployee(data.payload.id,data.payload)
       .pipe(
           map(() => new UpdateSuccess(data.payload)),
           catchError(error => EMPTY)
       ))
   )
  
 
}