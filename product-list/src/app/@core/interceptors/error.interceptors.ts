// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';
// import { DataService } from '../../core/services/data.service';
// import { AuthenticationService } from '../../core/services/authentication.service';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     constructor(private toastrService: ToastrService, private authenticationService: AuthenticationService, private data: DataService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(catchError(err => {
//             if (err.status === 401 && err.error.message === 'Session is timeout.Please login') {
//                 this.data.changeLoginPopupFlag('true');
//             } else if (err.status === 401 || err.status === 400 || err.status === 500) {
//                 const error = err.error.message || err.statusText;
//                 this.toastrService.error(error);
//                 // auto logout if 401 response returned from api
//                 // this.authenticationService.logout();
//                // location.reload(true);
//             }
//             const errors = err.error.message || err.statusText;
//             return throwError(errors);
//         }));
//     }
// }
