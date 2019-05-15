import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES, Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];

  deleteCourse(courseId:string): void { 
    const index: number = this.courses.findIndex(course => course.id === courseId);
    if(index !== -1){
      this.courses.splice(index, 1);
    }
  }
  
  updateCourse(course: Course): void { 
    const index: number = this.courses.findIndex(courseToUpdate => courseToUpdate.id === course.id);
    if(index !== -1) {    
      this.courses.splice(index,1,course);
    }
  }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
  constructor() {
    this.courses = COURSES;
   }
}
