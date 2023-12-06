import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private data: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  setData(data: string) {
    this.data.next(data);
  }

  getData(): Observable<string> {
    return this.data.asObservable();
  }
}
