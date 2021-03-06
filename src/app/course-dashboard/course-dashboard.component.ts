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
  courseToAdd: Course = new Course();
  selectedCourse: Course;
  courseToEdit: Course;
  idCount: number;

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

  add(courseToAdd: Course): void { 
    courseToAdd.rating = 0;
    courseToAdd.id = this.idCount;
    this.idCount += 1;
    this.courseService.addCourse(courseToAdd).subscribe();
    this.courses.push(courseToAdd);
  }

  delete(course: Course): void {
    this.courses = this.courses.filter(h => h !== course);
    this.idCount -= 1;
    this.courseService.deleteCourse(course).subscribe();
  }

  constructor( private courseService: CourseService) { }

  ngOnInit() {
     this.courseService.getCourses()
     .subscribe(courses => {this.courses = courses; this.idCount = courses.length + 1});
     
  }
}
