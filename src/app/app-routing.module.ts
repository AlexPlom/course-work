import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'courses', component: CourseComponent},
  { path: 'users', canActivate: [AuthGuard], component: UserComponent},
  { path: 'courses-admin', canActivate: [AuthGuard], component: CourseDashboardComponent },
  { path: 'detail/:id', canActivate: [AuthGuard], component: CourseDetailComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '*', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
