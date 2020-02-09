import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses;

  constructor(private courseService: CourseService ) { }

  ngOnInit() {
     this.getCourses();
  }

  onStarClicked(event) {
    alert(event);
  }

  getCourses() {
   // this.courses =
   this.courseService.getCourses()
        .subscribe(response => {
          this.courses = response;
        },
        error => console.log(error)
        );
  }

}
