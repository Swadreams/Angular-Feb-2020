import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbCourseService } from 'src/app/firebase/fb-course.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  courseId;
  course;
  courseForm;

  constructor(
    private route: ActivatedRoute,
    private fbCourseServcie: FbCourseService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe(
      response => {
        this.courseId = response.get('id');
        this.getCourse(this.courseId);
      }
    );
  }

  createForm() {
    this.courseForm = this.fb.group({
      courseCode: '',
      courseId: '',
      courseName: '',
      description: '',
      nextBatchDate: '',
      price: '',
      starRating: '',
      trainer: '',
    });
  }

  setFormFields() {
    this.courseForm.patchValue({
      courseCode: this.course.courseCode,
      courseId: this.course.courseId,
      courseName: this.course.courseName,
      description: this.course.description,
      nextBatchDate: this.course.nextBatchDate,
      price: this.course.price,
      starRating: this.course.starRating,
      trainer: this.course.trainer,
    });
  }

  getCourse(id) {
    this.fbCourseServcie.getCourse(id)
        .subscribe(
          response => {
            this.course = response.payload.val();
            this.course.courseId = response.payload.key;
            this.setFormFields();
            console.log(this.course);
          }
        );
  }

}
