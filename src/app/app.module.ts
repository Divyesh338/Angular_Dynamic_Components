import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomeDirective } from './directives/custome.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    CustomeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
