import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioformComponent} from './../usuarioform/usuarioform.component';

@Injectable({
  providedIn: 'root'
})
export class GuardregistrousuarioGuard implements CanDeactivate<UsuarioformComponent> {
  canDeactivate(component: UsuarioformComponent ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(component.enviado)
      return true
    else 
     alert("asdfasd")
      return false;
  } 
  
}
