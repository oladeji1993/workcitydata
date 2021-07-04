
import { AuthService } from './services/auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector : Injector
  ) { }

  intercept(req:any, next:any){
    const authToken = this.injector.get(AuthService) ;
    console.log(authToken)
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken.getToken()}`
      }
    });
    return next.handle(tokenizeReq)
  }
}
