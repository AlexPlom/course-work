import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError,  tap } from 'rxjs/operators';
import { CourseRatingMapping } from './CourseRatingMapping';

@Injectable({
  providedIn: 'root'
})
export class CourseRatingService {
  courseRatingMapping: CourseRatingMapping[];

  private courseRatingMappingUrl = 'api/courseRatingMapping';
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
        
  rateCourse(courseId: number, rating:number, userId: number): Observable<any> { 
    var courseMapping = this.courseRatingMapping.find(x => x.id === courseId); 

    if(courseMapping.ratings.findIndex(x => x.userId === userId) === -1) { 
      courseMapping.ratings.push({userId: userId, rating: rating });
    }

    return this.http.put(this.courseRatingMappingUrl, courseMapping);
  };

  getCourseRating(courseId: number): number { 
    var courseMapping = this.courseRatingMapping.find(x => x.id === courseId); 

    if(!courseMapping){ 
      var mapping = new CourseRatingMapping();
      mapping.id = courseId;
      mapping.ratings = [{
        rating:0,
        userId:0
      }]
      
      this.courseRatingMapping.push(mapping);
      return 0;
    }

    var averageRating = 0;
    courseMapping.ratings.forEach(element => {
      averageRating += element.rating;
    });
    return Math.round(averageRating / courseMapping.ratings.length);
  }

  getCourseRatingMapping(): Observable<CourseRatingMapping[]> {
    return this.http.get<CourseRatingMapping[]>(this.courseRatingMappingUrl)
    .pipe(
      tap(_ => console.log('fetched courses')),
      catchError(this.handleError<CourseRatingMapping[]>('getCourses', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) {
    this.getCourseRatingMapping().subscribe(courseratingMapping => this.courseRatingMapping = courseratingMapping);
   }
}


