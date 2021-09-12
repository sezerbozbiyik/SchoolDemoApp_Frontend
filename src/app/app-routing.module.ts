import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { ExamResultComponent } from './components/exam-result/exam-result.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:StudentComponent},
  {path:"students",component:StudentComponent},
  {path:"courses",component:CourseComponent},
  {path:"exam-results",component:ExamResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
