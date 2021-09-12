import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Course } from '../models/course';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  apiUrl = 'https://localhost:44310/api/courses/';
  constructor(private httpClient: HttpClient) {}

  getCourse(): Observable<ListResponseModel<Course>> {
    return this.httpClient.get<ListResponseModel<Course>>(this.apiUrl+"getall");
  }
  add(CourseModel:Course):Observable<ResponseModel>{
    let newPath=this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(newPath,CourseModel)
  }

  update(CourseModel:Course):Observable<ResponseModel>{
    let newPath=this.apiUrl+"update"
    return this.httpClient.post<ResponseModel>(newPath,CourseModel)
  }

  delete(CourseModel:Course):Observable<ResponseModel>{
    let newPath=this.apiUrl+"delete"
    return this.httpClient.post<ResponseModel>(newPath,CourseModel)
  }
}
