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
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }



}
