import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUsers } from '../core/types/types.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.apiUrl);
  }

  create(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.apiUrl, user);
  }

  update(user: IUsers): Observable<IUsers> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<IUsers>(url, user);
  }
}
