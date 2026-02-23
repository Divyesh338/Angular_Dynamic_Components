import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = 'https://jsonplaceholder.typicode.com';
  constructor(private _http: HttpClient) {}

  getTaskData(): Observable<any[]> {
    console.log(this.url + '/todos');
    return this._http.get<any[]>(`${this.url}/todos`);
  }
}
