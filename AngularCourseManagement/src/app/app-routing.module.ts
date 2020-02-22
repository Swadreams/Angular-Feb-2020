import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { AuthGuard } from './shared/auth.guard';
import { CourseDetailsComponent } from './course/course-details/course-details.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [ AuthGuard ]},
  {path: 'courses', component: CourseListComponent, canActivate: [ AuthGuard ]},
  {path: 'course-details/:id', component: CourseDetailsComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
