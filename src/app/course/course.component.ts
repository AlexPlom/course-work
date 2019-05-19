import { Component, OnInit } from '@angular/core';
import { Course } from '../course'
import { LoginService } from '../login.service';
import { CourseService} from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] ;
  selectedCourse: Course;

  onSelect(course: Course): void { 
    if(this.loginService.isUserLoggedIn()){
      if((this.selectedCourse == undefined) === false && this.selectedCourse.title === course.title){ 
        this.selectedCourse = null;
      }
      else{
        this.selectedCourse = course;
      }
    }
  }
  
  constructor(private loginService: LoginService, private courseService: CourseService) { }

  ngOnInit() {
     this.courseService.getCourses()
     .subscribe(courses => this.courses = courses);
  }
}
