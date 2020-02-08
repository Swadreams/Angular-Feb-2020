import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { StarComponent } from '../shared/star/star.component';



@NgModule({
  declarations: [
    CourseListComponent,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseModule { }
