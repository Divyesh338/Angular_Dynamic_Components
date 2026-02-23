import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';

@NgModule({
  declarations: [
    SharedComponent,
    DynamicFormComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
