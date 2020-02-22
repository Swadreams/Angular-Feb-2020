import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FbCourseService } from 'src/app/firebase/fb-course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses;
  errorMessage;

  constructor(
    private courseService: CourseService,
    private fbCourseService: FbCourseService
    ) { }

  ngOnInit() {
     this.getCourses();
  }

  onStarClicked(event) {
    alert(event);
  }

  getCourses() {
   // this.courses =
  //  this.courseService.getCourses()
  //       .subscribe(response => {
  //         this.courses = response;
  //       },
  //       error => this.errorMessage = error.message
  //       );

    this.fbCourseService.getCourses()
        .subscribe(
          response => {
            let coursesData = [];
            response.forEach(item => {
              const course: any = item.payload.val();
              course.courseId = item.payload.key;
              coursesData.push(course);
            });
            this.courses = coursesData;
            console.log(this.courses);
          },
          error => {
            console.log(error);
          }
    );
  }

}
