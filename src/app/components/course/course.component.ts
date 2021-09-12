import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: Course[];
  currentCourse: Course;
  courseForm: FormGroup;
  addCourseForm: FormGroup;

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCourse();
    this.createCourseForm();
    this.createAddCourseForm();
  }

  setCurrentCourse(course: Course) {
    this.currentCourse = course;
    this.createCourseForm();
  }

  getCourse() {
    this.courseService.getCourse().subscribe((response) => {
      this.courses = response.data;
    });
  }

  createCourseForm() {
    this.courseForm = this.formBuilder.group({
      id: [this.currentCourse? this.currentCourse.id:"", Validators.required],
      name: [
        this.currentCourse ? this.currentCourse.name : '',
        Validators.required,
      ],
    });
  }

  createAddCourseForm() {
    this.addCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (this.addCourseForm.valid) {
      let addCourseModel = Object.assign({}, this.addCourseForm.value);
      this.courseService.add(addCourseModel).subscribe((response) => {
        //this.toastrService.success(response.message)
        this.getCourse();
      });
    } else {
      Object.entries(this.addCourseForm.controls).forEach((element) => {
        if (element[1].status === 'INVALID') {
          // this.toastrService.warning(element[0] + ' boş olmamalı');
        }
      });
    }
  }

  update() {
    if (this.courseForm.valid) {
      let courseModel = Object.assign({}, this.courseForm.value);
      this.courseService.update(courseModel).subscribe((response) => {
        //this.toastrService.success(response.message)
        this.getCourse();
      });
    } else {
      Object.entries(this.courseForm.controls).forEach((element) => {
        if (element[1].status === 'INVALID') {
          // this.toastrService.warning(element[0] + ' boş olmamalı');
        }
      });
    }
  }

  delete() {
    if (this.courseForm.valid) {
      let courseModel = Object.assign({}, this.courseForm.value);
      this.courseService.delete(courseModel).subscribe((response) => {
        //this.toastrService.success(response.message)
        console.log(response);
        this.getCourse();
      });
    } else {
      Object.entries(this.courseForm.controls).forEach((element) => {
        if (element[1].status === 'INVALID') {
          // this.toastrService.warning(element[0] + ' boş olmamalı');
        }
      });
    }
  }
}
