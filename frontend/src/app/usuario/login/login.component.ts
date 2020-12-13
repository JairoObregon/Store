import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginServiceService} from './login-service.service';
import {loginuser} from './login.model';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password : string;

  usuario;  
  token;

  constructor(private log: LoginServiceService,
              private router : Router) {  }

  ngOnInit(): void {
   
  }

  login(){
    
    let ap = new loginuser(this.username,this.password);
    this.log.login(ap).subscribe(
      (data) => {
        console.log(data)
        this.log.setToken(data['token'])
        //this.log.setUserLogueado(data['user_username'])
        this.log.setisadmi(data['is_staff'])
        this.log.setUserLogueado(data['user_username'])
      },
      (error) => {
        console.log(error)
      }
    )
   // location.reload()

  }
  logout (){
        this.log.logout();
      
  }

}
