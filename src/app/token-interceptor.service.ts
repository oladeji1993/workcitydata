import { StorageService } from './services/storage/storage.service';
import { AuthService } from './services/auth/auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    // private injector : Injector,
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authToken = this.storageService.getAccessToken();
    if(authToken) {
      console.log(req.url)
      // console.log(authToken)
      req = req.clone({
        setHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token: `${authToken}`
        }
      });
    }

    return next.handle(req)
  }
}
