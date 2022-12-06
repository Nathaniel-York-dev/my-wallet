import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  public isBusy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public setBusy(): void {
    this.isBusy$.next(true);
  }

  public setFree(): void {
    this.isBusy$.next(false);
  }
}
