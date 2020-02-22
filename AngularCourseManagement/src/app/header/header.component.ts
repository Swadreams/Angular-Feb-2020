import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../admin/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logut() {
    this.authService.logout()
        .then(
          () => {
            alert('You have successfully logged out.');
            this.route.navigate(['/login']);
          },
          error => console.log(error)
        );
  }

}
