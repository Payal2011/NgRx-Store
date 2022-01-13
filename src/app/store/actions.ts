import { Action } from '@ngrx/store';
import { Employee } from '../model/employee.model';

export enum EmployeeActions {
  AddEmployee = '[Employee] Add to list',
  AddSuccess = '[Employee] added successfully',
  RemoveEmployee = '[Employee] Remove from list',
  RemoveSuccess = '[Employee] removed successfully',
  UpdateEmployee = '[Employee] update in list',
  UpdateSuccess = '[Employee] updated successfully',
  LoadEmployee = '[Employees] Load employees from server',
  EmployeeLoaded = '[Employees] Load success',
}

export class LoadEmployee implements Action {
  readonly type = EmployeeActions.LoadEmployee;
}

export class EmployeeLoaded implements Action {
  readonly type = EmployeeActions.EmployeeLoaded;
  constructor(public payload: Array<Employee>) {
  }
}
export class AddEmployee implements Action {
  readonly type = EmployeeActions.AddEmployee;
  constructor(public payload: Employee) {
  }
}
export class AddSuccess implements Action {
  readonly type = EmployeeActions.AddSuccess;
  constructor(public payload: Employee) {
  }
}

export class RemoveEmployee implements Action {
  readonly type = EmployeeActions.RemoveEmployee;
  constructor(public payload: number) {
  }
}
export class RemoveSuccess implements Action {
  readonly type = EmployeeActions.RemoveSuccess;
  constructor(public payload: number) {
  }
}

export class UpdateEmployee implements Action {
  readonly type = EmployeeActions.UpdateEmployee;
  constructor(public payload: Employee) {
  }
}

export class UpdateSuccess implements Action {
  readonly type = EmployeeActions.UpdateSuccess;
  constructor(public payload: Employee) {
  }
}

export type EmployeeActionsType =
  AddEmployee |
  AddSuccess |
  RemoveEmployee |
  RemoveSuccess |
  UpdateEmployee |
  UpdateSuccess |
  LoadEmployee |
  EmployeeLoaded;
