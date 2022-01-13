import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeReducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effect';
import { _runtimeChecksFactory } from '@ngrx/store/src/runtime_checks';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeComponent } from './component/employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({employee :EmployeeReducer}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }      
    }),
   EffectsModule.forRoot([EmployeeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
