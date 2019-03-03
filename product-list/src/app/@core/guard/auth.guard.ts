// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { environment } from '../../../environments/environment';
// import { AuthenticationService } from '../services/authentication.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//     appId: string = environment.fbAppId;
//     constructor(private router: Router, public authenticationService: AuthenticationService) {

//     }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         const url: string = state.url;
//         return this.verifyLogin(url);
//     }

//     verifyLogin(url): boolean {
//         const loggedIn = this.isLoggedIn();
//         const isAdmin = this.isAdmin();
//         if (!loggedIn) {
//             this.router.navigate(['']);
//             return false;
//         } else if (loggedIn && url === '/advertiser' && isAdmin) {
//             return true;
//         } else if (loggedIn && url !== '/advertiser' && !isAdmin) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     public isLoggedIn(): boolean {
//         const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
//         if (loggedUser) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     public isAdmin(): boolean {
//         const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
//         if (loggedUser) {
//             return loggedUser['role'] === 'admin';
//         } else {
//             return false;
//         }
//     }
// }
// inject into providers