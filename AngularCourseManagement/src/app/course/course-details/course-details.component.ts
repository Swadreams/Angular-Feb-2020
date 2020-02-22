import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbCourseService } from 'src/app/firebase/fb-course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId;
  course;

  constructor(
    private route: ActivatedRoute,
    private fbCourseServcie: FbCourseService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      response => {
        this.courseId = response.get('id');
        this.getCourse(this.courseId);
      }
    );
  }

  getCourse(id) {
    this.fbCourseServcie.getCourse(id)
        .subscribe(
          response => {
            this.course = response.payload.val();
            this.course.courseId = response.payload.key;
          }
        );
  }

}
