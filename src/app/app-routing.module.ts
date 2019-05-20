import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  { path: 'courses', component: CourseComponent},
  { path: 'users', component: UserComponent},
  { path: 'courses-admin', component: CourseDashboardComponent },
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '*', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
