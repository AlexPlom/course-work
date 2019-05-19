import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { User } from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      console.log(`${operation} failed: ${error.message}`);
   
      return of(result as T);
    };
  }

  updateuser (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => console.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateuser'))
    );
  }
}
