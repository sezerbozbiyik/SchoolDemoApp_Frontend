import { Component, OnInit } from '@angular/core';
import { ExamResultDetailDto } from 'src/app/models/examResultDetailDto';
import { Student } from 'src/app/models/student';
import { ExamResultService } from 'src/app/services/exam-result.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[];
  currentStudent: Student;
  exams: ExamResultDetailDto[];
  filterText: '';

  constructor(
    private studentService: StudentService,
    private examresultService: ExamResultService
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response.data;
    });
  }

  setCurrentStudent(student: Student) {
    this.currentStudent = student;
    this.getExamsByStudentId(student.id);
  }

  getExamsByStudentId(id: number) {
    this.examresultService
      .getExamResultsByStudentId(id)
      .subscribe((response) => {
        this.exams = response.data;
      });
  }
}
