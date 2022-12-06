import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAccountCards(userId: number): Observable<any> {
    return this.httpClient.get(`${environment.host}/users/${userId}/cards`)
  }

  public getAccountTransactions(userId: number, {limit, offset}: any): Observable<any> {
    return this.httpClient.get(`${environment.host}/users/${userId}/transactions/${offset}/${limit}`)
  }

  public getAccountBalance(userId: number): Observable<any> {
    return this.httpClient.get(`${environment.host}/users/${userId}/balance`)
  }
}
