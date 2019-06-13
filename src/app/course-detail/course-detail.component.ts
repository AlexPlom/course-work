import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService }  from '../course.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { JoinedCoursesMappingService } from '../joined-courses-mapping.service';
import { CourseRatingService } from '../course-rating.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  ratingOptions: number[] = [1,2,3,4,5];
  selectedRating: number = 1;
  hasUserJoined: boolean;

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private joinedCoursesMappingService: JoinedCoursesMappingService,
    private courseRatingService: CourseRatingService,
    private location: Location) { }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(item => {
        this.course = item;
        this.updateUserJoinedCourseMapping();
      });
  }

  joinCourse(): void { 
    var user: User = JSON.parse( localStorage.getItem("loggedUser"));
    this.joinedCoursesMappingService.joinCourse(this.course.id, user.id).subscribe( );
    this.updateUserJoinedCourseMapping();
  }

  updateUserJoinedCourseMapping(): void  {
    var user: User = JSON.parse( localStorage.getItem("loggedUser"));

    this.hasUserJoined = this.joinedCoursesMappingService.hasUserJoinedCourse(this.course.id, user.id)
  }

  addRating(): void { 
    var user: User = JSON.parse( localStorage.getItem("loggedUser"));

    this.courseRatingService.rateCourse(this.course.id, this.selectedRating,user.id).subscribe();
  }

  getCourseRating(): number { 
    return this.courseRatingService.getCourseRating(this.course.id);
  }
  ngOnInit() {
    this.getCourse();
  }

  goBack(): void { 
    this.location.back();
  }
}