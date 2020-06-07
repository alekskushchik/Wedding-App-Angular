import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = JSON.parse(localStorage.getItem('user-token'));
    if (token !== null) {
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token.access_token);
      req = req.clone({headers});
      console.log(req);
    }
    return next.handle(req);
  }
}
