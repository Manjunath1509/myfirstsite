// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpResponse,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';
// // import { RollbarService } from 'src/app/app.module';

// @Injectable()
// export class HttpErrorInterceptor implements HttpInterceptor {
//   constructor(private injector: Injector) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request)
//       .pipe(
//       retry(1),
//       catchError((error: HttpErrorResponse) => {
//         const rollbar = this.injector.get(RollbarService);
//         let errorMessage = '';
//         if (error.error instanceof ErrorEvent) {
//           // client-side error
//           errorMessage = `Error: ${error.error.message}`;
//         } else {
//           // server-side error
//           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//         }
//         window.alert(errorMessage);
//         rollbar.error(error);
//         return throwError(errorMessage);
//       })
//       )
//   }
// }
