import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CourseComponent,
    UserDetailComponent,
    LoginComponent,
    CourseDetailComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
