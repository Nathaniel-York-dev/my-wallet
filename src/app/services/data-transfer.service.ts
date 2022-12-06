import { Injectable } from '@angular/core';
import {IUser} from "../lib/interfaces/user.interface";
import {BehaviorSubject, tap} from "rxjs";
import {saveInStorage} from "../lib/decorator/session-storage.decorator";
import {ICard} from "../lib/interfaces/card.interface";
import {ITransaction} from "../lib/interfaces/transaction.interface";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  @saveInStorage({ storage: sessionStorage, priority: 'storage' })
  private user!: IUser;

  @saveInStorage({ storage: sessionStorage, priority: 'storage' })
  private cards: ICard[] = [];

  @saveInStorage({ storage: sessionStorage, priority: 'storage' })
  private transactions: any[] = [];

  @saveInStorage({ storage: sessionStorage, priority: 'storage' })
  private balance: number = 0;

  public data$: BehaviorSubject<any> = new BehaviorSubject<any>(this.user);
  constructor() {}

  public getUser(): IUser {
    return this.user;
  }

  public setUser(user: IUser): void {
    this.user = user;
    this.data$.next({ ...this.data$.getValue(), user });
  }

  public getCards(): ICard[] {
    return this.cards;
  }

  public setCards(cards: ICard[]): void {
    this.cards = cards;
    this.data$.next({ ...this.data$.getValue(), cards });
  }

  public getTransactions(): ITransaction[] {
    return this.transactions;
  }

  public setTransactions(transactions: any[]): void {
    this.transactions = transactions;
    this.data$.next({ ...this.data$.getValue(), transactions });
  }

  public getBalance(): number {
    return this.balance;
  }

  public setBalance(balance: number): void {
    this.balance = balance;
    this.data$.next({ ...this.data$.getValue(), balance });
  }

}
