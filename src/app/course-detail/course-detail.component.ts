import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService }  from '../course.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location) { }

    getCourse(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.courseService.getCourse(id)
        .subscribe(item => this.course = item);

        console.log(this.course);
    }

    joinCourse(): void { 
      console.log("shit")
    }

    addRating(): void { 

    }
    
  ngOnInit() {
    this.getCourse();
  }

  goBack(): void { 
    this.location.back();
  }
}
