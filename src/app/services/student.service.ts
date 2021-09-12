import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponsemodel';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = 'https://localhost:44310/api/students/';
  constructor(private httpClient: HttpClient) {}

  getStudents():Observable<ListResponseModel<Student>> {
    return this.httpClient.get<ListResponseModel<Student>>(this.apiUrl+"getall");
  }

  getStudentById(id:number):Observable<SingleResponseModel<Student>>{
    return this.httpClient.get<SingleResponseModel<Student>>(this.apiUrl+"getbyid?id="+id);
  }
}
