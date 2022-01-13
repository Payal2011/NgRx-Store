import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  // API = "https://reqres.in/api/users?page=1";
  API = "http://localhost:3000/data"
  getAll() {
    return this.http.get<Employee[]>(this.API);
  }

  updateEmployee(id, employeeList) {
    return this.http.put<Employee[]>(`${this.API}/${id}`, employeeList);
  }
  addEmployee(employee: Employee) {
    return this.http.post<Employee[]>(this.API, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.API}/${id}`);
  }


}
