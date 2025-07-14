import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'https://your-api.com/auth';

  constructor(private http: HttpClient) {}


  login(credentials:{email:string,password:string}){
    return this.http.post(`${this.apiURL}/login`,credentials)
  }
}
