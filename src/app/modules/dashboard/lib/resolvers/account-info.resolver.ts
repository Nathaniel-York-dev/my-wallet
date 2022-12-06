import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, switchMap} from 'rxjs';
import {AccountService} from "../../services/account.service";
import {DataTransferService} from "../../../../services/data-transfer.service";

@Injectable({
  providedIn: 'root'
})
export class AccountInfoResolver implements Resolve<boolean> {
  constructor(
    private accountService: AccountService,
    private dataTransferService: DataTransferService,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const userId = this.dataTransferService.getUser().id;
    return this.accountService.getAccountCards(userId).pipe(
      switchMap((response: any) => {
        this.dataTransferService.setCards(response.data);
        return this.accountService.getAccountTransactions(userId, {limit: 10, offset: 0});
      }),
      switchMap((response: any) => {
        this.dataTransferService.setTransactions(response.data);
        return this.accountService.getAccountBalance(userId);
      }),
      map((response: any) => {
        this.dataTransferService.setBalance(response?.data?.amount);
        return response.data;
      })
    );
  }
}
