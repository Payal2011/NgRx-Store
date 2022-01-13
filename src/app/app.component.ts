import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from './model/employee.model'
import { EmployeeFacade } from './store/employee-facade';
import {  Observable } from 'rxjs';
import { AppState } from './model/app-state.model';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 
}




