import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { StarComponent } from '../shared/star/star.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseListComponent,
    StarComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseModule { }
