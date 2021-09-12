import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Course } from 'src/app/models/course';
import { ExamResultDetailDto } from 'src/app/models/examResultDetailDto';
import { Student } from 'src/app/models/student';
import { CourseService } from 'src/app/services/course.service';
import { ExamResultService } from 'src/app/services/exam-result.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css'],
})
export class ExamResultComponent implements OnInit {
  addExamResultForm: FormGroup;
  courses: Course[];
  examResults: ExamResultDetailDto[];
  students: Student[];

  constructor(
    private examResultService: ExamResultService,
    private courseService: CourseService,
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCourses();
    this.getStudents();
    this.getExamResults();
    this.createAddExamResultForm();
  }

  getCourses() {
    this.courseService
      .getCourse()
      .subscribe((response) => (this.courses = response.data));
  }

  getStudents() {
    this.studentService
      .getStudents()
      .subscribe((response) => (this.students = response.data));
  }

  getExamResults() {
    this.examResultService.getExamResults().subscribe((response) => {
      this.examResults = response.data;
    });
  }

  createAddExamResultForm() {
    this.addExamResultForm = this.formBuilder.group({
      studentId: [null,Validators.required],
      courseId: [null,Validators.required],
      score: ['', Validators.required],
    });
  }

  add() {
    if (this.addExamResultForm.valid) {
      const value = {
        ...this.addExamResultForm.value,
        studentId: +this.addExamResultForm.value.studentId,
        courseId: +this.addExamResultForm.value.courseId,
      };
      let addExamResultModel = Object.assign({},value);
      console.log(addExamResultModel);
      this.examResultService.add(addExamResultModel).subscribe((response) => {
        //this.toastrService.success(response.message)
        this.getExamResults();
      });
    } else {
      Object.entries(this.addExamResultForm.controls).forEach((element) => {
        if (element[1].status === 'INVALID') {
          // this.toastrService.warning(element[0] + ' boş olmamalı');
        }
      });
    }
  }
}
