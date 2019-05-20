import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CourseComponent,
    LoginComponent,
    CourseDetailComponent,
    CourseEditComponent,
    CourseDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
