import { Component, OnInit } from '@angular/core';
import {NavigationBarService} from "../../services/navigation-bar.service";
import {Observable} from "rxjs";
import {BusyService} from "../../services/busy.service";

@Component({
  selector: 'my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss']
})
export class MyWalletComponent implements OnInit {

  public show$: Observable<boolean>;

  constructor(
    public busyService: BusyService,
    private navigationBarService: NavigationBarService,
  ) {
    this.show$ = navigationBarService.show$;
  }

  ngOnInit(): void {
  }

}
