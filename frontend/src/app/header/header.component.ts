import { Component, OnInit,Input } from '@angular/core';
import {LoginServiceService} from '../usuario/login/login-service.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogin : boolean =false;
  public usuario = null ;
  nombreUsuario:string;
  public isadmin: boolean =false;
  constructor( private login : LoginServiceService, private router : Router) { }
 

  ngOnInit() {
    this.ObtenerSesion();
    this.nombreUsuario=localStorage.getItem('user')
    this.isadmin=  Boolean(JSON.parse(localStorage.getItem('admi'))); 
    console.log(typeof(this.isadmin))
   // this.isadmin=localStorage.getItem('is_staff')
  
  }

  ObtenerSesion(){
    if(this.login.getToken() == null){
      this.isLogin= false
    }else{
      this.isLogin= true
    }
    
  }
  salir(){
    this.login.logout();
    //this.router.navigate([''])
    location.reload()
  }
 

}
