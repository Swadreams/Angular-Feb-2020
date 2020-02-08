import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any[];
  constructor() { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courses =  [
        {
          courseCode : 'ZIDOX-00',
          courseId : 0,
          courseName : 'Angular 9',
          description : 'Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n',
          imageUrl : 'https://angular.io/assets/images/logos/angular/angular.png',
          nextBatchDate : '08-03-2020',
          price : 4679.76,
          starRating : 3.6,
          trainer : 'Ellis Hester'
        },
        {
          "courseCode" : "METROZ-11",
          "courseId" : 1,
          "courseName" : "React",
          "description" : "Quis slaboris in eu cillum ex minim. Veniam cupidatat pariatur pariatur officia in aliquip velit aliqua ullamco quis mollit. Dolore sint esse id duis ut laboris culpa pariatur consectetur aute amet eu in. Nostrud laboris commodo tempor Lorem sunt anim pariatur voluptate fugiat Lorem. Proident esse consequat dolor voluptate id ipsum exercitation mollit incididunt.\r\n",
          "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png",
          "nextBatchDate" : "08-03-2020",
          "price" : 6595.71,
          "starRating" : 3.9,
          "trainer" : "Lupe Estrada"
        },
      ];
  }

}
