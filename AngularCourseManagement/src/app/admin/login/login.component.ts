import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage;
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(form) {
    this.errorMessage = null;
    const data = form.value;
    this.authService.login(data.email, data.pswd)
        .then(
          response => {
            this.route.navigate(['/home']);
          },
          error => this.errorMessage = error.message
        );
  }

}
