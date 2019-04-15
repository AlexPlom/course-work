import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService} from '../user.service';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService, private messageService: MessageService) {

  }

  onSelect(user: User): void { 
    this.selectedUser = user;
    this.messageService.add("another one");
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }
}
