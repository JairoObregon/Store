import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService  } from './../usuario/login/login-service.service';
import { LoginComponent  } from './../usuario/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivateChild {
  constructor(private login: LoginServiceService,private dato: LoginComponent){
  }
  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('admi') == 'true')
      return true
    else
      return false;
  }
  
}
