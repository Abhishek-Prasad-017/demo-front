import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public SERVER_URL = 'http://0.0.0.0:8080/';
  constructor(public httpClient: HttpClient) { }

  public fetchData() {
    return this.httpClient.get<any>(`${this.SERVER_URL}`);
  }
}
