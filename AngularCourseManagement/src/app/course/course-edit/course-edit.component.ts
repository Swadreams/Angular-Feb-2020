import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isNewCourse = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fbCourseServcie: FbCourseService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe(
      response => {
        this.courseId = response.get('id');

        if (this.courseId === 'new') {
          this.isNewCourse = true;
        } else {
          this.isNewCourse = false;
          this.getCourse(this.courseId);
        }
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
      imageUrl: '',
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
      imageUrl: this.course.imageUrl,
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

  submitForm() {
    this.fbCourseServcie.updateCourse(this.courseId, this.courseForm.value)
        .then(
          response => {
            alert('Course Updated Successfully.');
            this.router.navigate(['/course-details', this.courseId]);
          },
          error => {
            console.log('Error', error);
            alert('Can not update the course at the moment. ');
          }
        );
  }

}
