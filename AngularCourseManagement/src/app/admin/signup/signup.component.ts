import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder) { }

  get formControls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
   this.form = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.minLength(2)]],
      password: ''
   });
  }

  signup() {
    console.log(this.form);
  }

}
