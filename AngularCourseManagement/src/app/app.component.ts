import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCourseManagement';
  isLogin: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkIsLogin();
  }

  checkIsLogin() {
    // Subscribed events to determine header to show or not.
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/login' || event.url === '/' || event.url === '/signup') {
            this.isLogin = true;
          } else {
            this.isLogin = false;
          }
        }
      }
    );
  }
}
