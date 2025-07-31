import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";

import { AuthguradServiceService } from "./authgurad-service.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private Authguardservice: AuthguradServiceService,
    private router: Router
  ) {}
  canActivate(): boolean {
    // if(!this.Authguardservice.gettoken())
    // {

    //   this.router.navigateByUrl("/login");

    // }
    // return this.Authguardservice.gettoken();
    this.router.navigateByUrl("/login");
    return false;
  }
}
