
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const cloned = req.clone({
    headers: req.headers.set('X-Riot-Token', "RGAPI-6059a4dc-7b19-4fbc-8b34-de6ca38b6c2f")
  })


  return next(cloned);
};



// @Injectable()
// export class AuthTokenInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const cloned = req.clone({
//       headers: req.headers.set('Authorization', `Bearer ${environment.staticToken}`)
//     });

//     return next.handle(cloned);
//   }
// }
