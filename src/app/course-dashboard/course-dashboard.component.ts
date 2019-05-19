import { Component, OnInit } from '@angular/core';
import { Course } from '../course'
import { CourseService} from '../course.service';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {
  courses: Course[] ;
  selectedCourse: Course;
  courseToEdit: Course;

  onSelect(course: Course): void { 
      if((this.selectedCourse == undefined) === false && this.selectedCourse.title === course.title){ 
        this.selectedCourse = null;
      }
      else{
        this.selectedCourse = course;
      }
  }
  
  onSelectToEdit(course: Course): void { 
    if((this.courseToEdit == undefined) === false && this.courseToEdit.id === course.id){
      this.courseToEdit = null;
    }
    else{
      this.courseToEdit = course;
    }
  }

  delete(course: Course): void {
    this.courses = this.courses.filter(h => h !== course);
    this.courseService.deleteCourse(course).subscribe();
  }

  constructor( private courseService: CourseService) { }

  ngOnInit() {
     this.courseService.getCourses()
     .subscribe(courses => this.courses = courses);
  }
}
