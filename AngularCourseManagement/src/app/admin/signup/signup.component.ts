import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpaceValidator } from '../space.validator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private route: Router) {
  }

  get formControls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
   this.form = this.fb.group({
      email: ['', [
                  Validators.required,
                  Validators.minLength(3),
                  SpaceValidator.canNotContainSpace],
                ],
      password: ''
   });
  }

  signup() {
    const data = this.form.value;
    this.authService.signup(data.email, data.password)
        .then(
          response => {
            alert('User created Successfully.');
            this.route.navigate(['/home']);
          },
          error => alert('Can not create user at the moment. Please try again.')
        );
  }

}
