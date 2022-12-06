import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient,
  ) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.host}/login`, { email, password })
  }

}
