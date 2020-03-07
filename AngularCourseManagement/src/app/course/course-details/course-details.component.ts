import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbCourseService } from 'src/app/firebase/fb-course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId;
  course;
  showMore = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  deleteCourse() {
    const action = confirm('Do you really want to delete this coure?');

    if (action) {
      this.fbCourseServcie.deleteCourse(this.courseId)
          .then(
            () => {
              alert('Course Deleted Successfully.');
              this.router.navigate(['/courses']);
            }
          );
    }
  }

  showMoreText() {
    this.showMore = !this.showMore;
  }

}
