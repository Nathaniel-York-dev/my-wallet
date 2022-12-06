import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {

  public readonly show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public show(): void {
    this.show$.next(true);
  }

  public hide(): void {
    this.show$.next(false);
  }

}
