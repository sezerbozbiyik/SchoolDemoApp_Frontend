import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamResult } from '../models/examResult';
import { ExamResultDetailDto } from '../models/examResultDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ExamResultService {
  apiUrl = 'https://localhost:44310/api/examresults/';
  constructor(private httpClient: HttpClient) {}

  getExamResults(): Observable<ListResponseModel<ExamResultDetailDto>> {
    return this.httpClient.get<ListResponseModel<ExamResultDetailDto>>(
      this.apiUrl + 'getallbydto'
    );
  }

  getExamResultsByStudentId(id:number): Observable<ListResponseModel<ExamResultDetailDto>> {
    return this.httpClient.get<ListResponseModel<ExamResultDetailDto>>(
      this.apiUrl + 'getbystudentid?id='+id
    );
  }

  add(examResultModel:ExamResult):Observable<ResponseModel>{
    let newPath=this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(newPath,examResultModel)
  }

  update(examResultModel:ExamResult):Observable<ResponseModel>{
    let newPath=this.apiUrl+"update"
    return this.httpClient.post<ResponseModel>(newPath,examResultModel)
  }

  delete(examResultModel:ExamResult):Observable<ResponseModel>{
    let newPath=this.apiUrl+"delete"
    return this.httpClient.post<ResponseModel>(newPath,examResultModel)
  }
}
