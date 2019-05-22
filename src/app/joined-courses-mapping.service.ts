import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { JoinedCourseMapping } from './joinedCourseMapping';


@Injectable({
  providedIn: 'root'
})
export class JoinedCoursesMappingService {
  joinedCourseMapping: JoinedCourseMapping[];

  
  private joinedCoursesMappingUrl = 'api/joinedCoursesMapping';
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
        
  joinCourse(courseId: number, userId:number): Observable<any> { 
    var courseMapping = this.joinedCourseMapping.find(x => x.id === courseId); 

    if(courseMapping.usersJoined.indexOf(userId) === -1) {
      courseMapping.usersJoined.push(userId);
    }
    
    return this.http.put(this.joinedCoursesMappingUrl, courseMapping);
  };

  hasUserJoinedCourse(courseId: number, userId: number): boolean { 
    var courseMapping = this.joinedCourseMapping.find(x => x.id === courseId); 
    if(courseMapping.usersJoined.indexOf(userId) === -1) {
      return false;
    }
    return true;
  }

  getCourseMappings(): Observable<JoinedCourseMapping[]> {
    return this.http.get<JoinedCourseMapping[]>(this.joinedCoursesMappingUrl)
    .pipe(
      tap(_ => console.log('fetched courses')),
      catchError(this.handleError<JoinedCourseMapping[]>('getCourses', []))
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
    this.getCourseMappings().subscribe(joinedCourseMapping => this.joinedCourseMapping = joinedCourseMapping);
   }
}

