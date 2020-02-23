import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FbCourseService {

  constructor(private db: AngularFireDatabase) { }

  getCourses() {
    return this.db.list('/courses').snapshotChanges();
  }

  getCourse(courseId) {
    return this.db.object(`/courses/${courseId}`).snapshotChanges();
  }

  updateCourse(courseId, course) {
    return this.db.object(`/courses/${courseId}`).update(course);
  }

  deleteCourse(courseId) {
    return this.db.object(`/courses/${courseId}`).remove();
  }

  addCourse(course) {
    return this.db.list(`/courses`).push(course);
  }

}
