import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  private coursesUrl = 'api/courses';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  deleteCourse(course: Course): Observable<any> { 
    const url = `${this.coursesUrl}/${course.id}`;

    return this.http.delete<Course>(url,this.httpOptions)
    .pipe(
      tap(_ => console.log(`deleted course id=${course.id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }

  updateCourse(course: Course): Observable<any> { 
    return this.http.put(this.coursesUrl, course, this.httpOptions).pipe(
      tap(_ => console.log(`updated course id=${course.id}`)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }
  
  addCourse(course: Course): Observable<any> {
    console.log("im here");
    return this.http.post(this.coursesUrl, course, this.httpOptions)
    .pipe(
      tap(_ => console.log(`adding course id=${course.id}`)),
      catchError(this.handleError<any>('addCourse'))
    );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl)
    .pipe(
      tap(_ => console.log('fetched courses')),
      catchError(this.handleError<Course[]>('getCourses', []))
    );
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(this.coursesUrl + "/" + id)
    .pipe(
      tap(_ => console.log('fetched courses')),
      catchError(this.handleError<Course>('getCourses'))
    );
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient) {
      this.getCourses().subscribe(courses => this.courses = courses);
      }
}
