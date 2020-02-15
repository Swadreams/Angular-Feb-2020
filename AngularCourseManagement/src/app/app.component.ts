import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCourseManagement';
  isLogin: boolean;

  ngOnInit() {
    this.checkIsLogin();
  }

  checkIsLogin() {
    const path = location.pathname;
    if (path === '/login' || path === '/') {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
}
