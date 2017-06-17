import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.storeAttemptedUrl(state);
    this.navigateToTheLoginPage();

    return false;
  }

  private navigateToTheLoginPage() {
    this.router.navigate(['/login']);
  }

  private storeAttemptedUrl(state: RouterStateSnapshot) {
    this.authService.redirectUrl = state.url;
  }

}
