// import { CanActivateFn } from '@angular/router';

// export const authUserLoginGuard: CanActivateFn = (route, state) => {
//   return true;
// };

// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authUserLoginGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Your authentication logic here
    const isAuthenticated = this.checkIfUserIsAuthenticated();

    if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      // alert('Got to Login ......')
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  private checkIfUserIsAuthenticated(): boolean {
    // Implement your authentication check logic here
    // For example, check if a user token exists
    return !!localStorage.getItem('token');
  }
}
