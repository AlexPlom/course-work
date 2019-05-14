import { Component, OnInit } from '@angular/core';
import { Course, COURSES } from '../course'
import { LoginService } from '../login.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = COURSES;
  selectedCourse: Course;
  courseToEdit: Course;

  onSelect(course: Course): void { 
    if(this.loginService.isUserLoggedIn()){
      if((this.selectedCourse == undefined) === false && this.selectedCourse.title === course.title){ 
        console.log(this.selectedCourse.title);
        console.log(course.title);
        this.selectedCourse = null;
      }
      else{
        this.selectedCourse = course;
      }
    }
  }
  
  onSelectToEdit(course: Course): void { 
    if(this.loginService.isUserLoggedIn()){
      this.courseToEdit = course;
    }
  }

  hasLoggedAdmin(): boolean { 
    return this.loginService.isUserLoggedIn() && this.loginService.isUserAdmin();
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
}
