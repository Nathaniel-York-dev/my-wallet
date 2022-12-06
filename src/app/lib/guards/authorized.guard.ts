import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route, Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {DataTransferService} from "../../services/data-transfer.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

    constructor(
      private dataTransferService: DataTransferService,
      private router: Router
    ) { }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if(route.path?.includes('sign') && this.dataTransferService.getUser()) {
        this.router.navigate(['/dashboard']);
        return false;
      }else if(route.path?.includes('dashboard') && !this.dataTransferService.getUser()) {
        this.router.navigate(['/sign']);
        return false;
      }
      return true;
    }
}
