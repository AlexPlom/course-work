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
  courseToEdit: Course;

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
  
  onSelectToEdit(course: Course): void { 
    if(this.loginService.isUserLoggedIn()){
      if((this.courseToEdit == undefined) === false && this.courseToEdit.id === course.id){
        this.courseToEdit = null;
      }
      else{
        this.courseToEdit = course;
      }
    }
  }

  deleteCourse(course: Course): void { 
    this.courseService.deleteCourse(course.id)
    if(this.selectedCourse.id === course.id){
      this.selectedCourse = null;
    }
    if(this.courseToEdit.id === course.id){
      this.courseToEdit = null;
    }
  }

  hasLoggedAdmin(): boolean { 
    return this.loginService.isUserLoggedIn() && this.loginService.isUserAdmin();
  }

  constructor(private loginService: LoginService, private courseService: CourseService) { }

  ngOnInit() {
     this.courseService.getCourses()
     .subscribe(courses => this.courses = courses);
  }
}
