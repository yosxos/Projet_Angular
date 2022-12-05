import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class Erreur401Interceptor implements HttpInterceptor {

  constructor(private u:UserService) {}
  /**
   * Intercepte les erreurs
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      erreur=>{
        if(erreur instanceof HttpErrorResponse && erreur.status ==401){
          this.u.deconnextion();
        }
        return erreur;
      }
    )  }
}
