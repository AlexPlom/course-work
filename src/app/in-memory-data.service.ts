import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] =[
      { id:"1", name: 'Admin', email: "admin@admin", password: "admin", role: "admin", isBlocked: false },
      { id:"2", name: 'User', email: "user@user", password: "123456", role: "user", isBlocked: false },
      { id:"3", name: 'alexplom', email: "Bombasto", password: "123qwe", role: "admin", isBlocked: false },
      { id:"4", name: 'Celeritas', email: "Celeritas", password: "123456", role: "user", isBlocked: false },
      { id:"5", name: 'Magneta', email: "Magneta", password: "123456", role: "user", isBlocked: false },
      { id:"6", name: 'RubberMan', email: "RubberMan", password: "123456", role: "some stuff", isBlocked: false },
      { id:"7", name: 'Dynama', email: "Dynama", password: "123456", role: "user", isBlocked: false },
      { id:"8", name: 'Dr IQ', email: "driq", password: "123456", role: "user", isBlocked: false },
      { id:"9", name: 'Magma', email: "Magma", password: "123456", role: "user", isBlocked: false },
      { id:"10", name: 'Tornado', email: "Tornado", password: "123456", role: "user", isBlocked: false }
    ];
    const courses: Course[] = [
      { id:"1", title: "Maths", description: "Basic Algebra", rating: 5},
      { id:"2", title: "Geography", description: "Mountains and stuff", rating: 4},
      { id:"3", title: "History", description: "Mostly old stuff", rating: 3}
    ]

    return {users, courses};
  }
}