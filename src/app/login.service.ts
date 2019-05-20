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
    if(this.users.some((item) => item.name === username && item.password === password && item.isBlocked === false)){
      var user = this.users.find((item) => item.name === username && item.password === password);
      console.log("Successfully logging in", username);
      localStorage.setItem("loggedUser", JSON.stringify(user));
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean { 
    var user = JSON.parse(localStorage.getItem("loggedUser"));
    if(user === null) {
      return false;
    }
    return true;
  }

  isUserAdmin(): boolean { 
    var user = JSON.parse(localStorage.getItem("loggedUser"));
    if(user === null) {
      return false;
    }
    return user.role === "admin";
  }
}
