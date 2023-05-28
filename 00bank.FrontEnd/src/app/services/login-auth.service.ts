import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private authServiceUrl = 'http://localhost:8080/login';
  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    const body = {email, senha};
    return this.http.post(`${this.authServiceUrl}/login`, { withCredentials: true });

  }
}
