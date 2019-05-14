import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService} from '../login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  name = new FormControl('');
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  username(): string { return this.profileForm.get('username').value; }
  password(): string { return this.profileForm.get('password').value; }

  onSubmit() {

    if(this.loginService.loginUser(this.username(), this.password())){
      console.log("shit")
    }
  }
}
