import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @Input() course: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit() {

  }

  onSubmit(course: Course) {
    this.courseService.updateCourse(course);
  }
}
