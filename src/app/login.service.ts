import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[];
  loggedInUser: User;
  userHasLoggedIn: boolean = false;

  constructor(private userService: UserService) {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
   }

  loginUser(username:string, password: string ): boolean { 
    if(this.users.some((item) => item.name === username && item.password === password)){
      var user = this.users.find((item) => item.name === username && item.password === password);
      console.log("Successfully logging in", username);
      
      this.loggedInUser = user;
      this.userHasLoggedIn = true;
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean { 
    return this.userHasLoggedIn;
  }

  isUserAdmin(): boolean { 
    return this.loggedInUser.role === "admin";
  }
}
