import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { NaviComponent } from './components/navi/navi.component';
import { CourseComponent } from './components/course/course.component';
import { ExamResultComponent } from './components/exam-result/exam-result.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NaviComponent,
    CourseComponent,
    ExamResultComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
