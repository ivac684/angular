import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  constructor(public http: HttpClient) { }
  getAllTodos(){
    return this.http.get('${environment.API_URL}');
  }
}
