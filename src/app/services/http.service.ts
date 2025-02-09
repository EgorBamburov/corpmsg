import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get<Res>(uri: string): Observable<Res> {
    return this.http.get('')
  }

  public post<Res, Req>(uri: string, payload: Req): Observable<Res> {
    return this.http.post('', payload);
  }

  public patch<Res, Req>(uri: string, payload: Req): Observable<Res> {
    return this.http.patch('', payload)
  }

  public delete<Res>(uri: string): Observable<Res> {
    return this.http.delete('')
  }
}
