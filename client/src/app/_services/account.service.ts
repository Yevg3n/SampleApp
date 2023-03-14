import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Provide the http requests from client to server
// Doing it through service allows us to centralize the http requests
export class AccountService {
  baseUrl = 'https://localhost:5501/api/';

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model)
  }
}
