import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
    searchControl = new FormControl('');
  mainForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      departments: this.fb.array([])
    });

    this.addDepartment(); // initial department
  }

  // ----------- Getters -----------

  get departments(): FormArray {
    return this.mainForm.get('departments') as FormArray;
  }

  employees(deptIndex: number): FormArray {
    return this.departments.at(deptIndex).get('employees') as FormArray;
  }

  skills(deptIndex: number, empIndex: number): FormArray {
    return this.employees(deptIndex)
      .at(empIndex)
      .get('skills') as FormArray;
  }

  // ----------- Add Methods -----------

  addDepartment() {
    const dept = this.fb.group({
      name: [''],
      employees: this.fb.array([])
    });

    this.departments.push(dept);
  }

  addEmployee(deptIndex: number) {
    const emp = this.fb.group({
      name: [''],
      skills: this.fb.array([])
    });

    this.employees(deptIndex).push(emp);
  }

  addSkill(deptIndex: number, empIndex: number) {
    this.skills(deptIndex, empIndex).push(this.fb.control(''));
  }
}
