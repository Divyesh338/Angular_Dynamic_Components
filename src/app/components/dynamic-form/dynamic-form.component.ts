import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  form!: FormGroup;
  loginFields = [
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      validators: ['required', 'email'],
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      validators: ['required'],
    },
  ];

  registerFields = [
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
      validators: ['required'],
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      validators: ['required', 'email'],
    },
    {
      type: 'password',
      name: 'password', 
      label: 'Password',
      validators: ['required'],
    },
  ];

  fields: any[] = [];
  mode: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.switchMode('login');
  }

  switchMode(type: 'login' | 'register') {
    this.mode = type;
    this.fields = type === 'login' ? this.loginFields : this.registerFields;
    this.createForm();
  }

  createForm() {
    const group: any = {};

    this.fields.forEach((field) => {
      group[field.name] = ['', this.mapValidators(field.validators)];
    });

    this.form = this.fb.group(group);
  }

  mapValidators(validators: string[]) {
    const result = [];

    if (validators.includes('email')) {
      result.push(Validators.email);
    }

    if (validators.includes('required')) {
      result.push(Validators.required);
    }

    return result;
  }

  submit() {
    if (this.form.invalid) return;

    if (this.mode === 'login') {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    console.log('Login API Call', this.form.value);
  }

  register() {
    console.log('Register API Call', this.form.value);
  }
}
