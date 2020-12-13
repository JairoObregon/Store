import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {loginuser} from './login.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  httpOptions : any
 ;

  constructor(private httpcliente: HttpClient,) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  
    
    
  }
  
  
  login(user: loginuser){
    return this.httpcliente.post('http://127.0.0.1:8000/auth/', user );
  }
  getUser(id,token){
    //this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'token '+token)
    return this.httpcliente.get('http://127.0.0.1:8000/users/'+id,this.httpOptions)
  }
  getListUser(token){
    //this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'token '+token)
    return this.httpcliente.get('http://127.0.0.1:8000/users  ',this.httpOptions)
  }
  removeUser(id){
    //this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'token '+token)
    return this.httpcliente.delete('http://127.0.0.1:8000/users/'+id,this.httpOptions)
  }
  putUser(id,user,token){
    //this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'token '+token)
    return this.httpcliente.put('http://127.0.0.1:8000/users/'+id+'/',user,this.httpOptions)
  }
  createUser(user: any){
    return this.httpcliente.post('http://127.0.0.1:8000/users/', user );
  }





  
  setToken(tokem){

    localStorage.setItem("accessToken",tokem)
  }
  getToken() {
    return localStorage.getItem("accessToken");
  }

  setisadmi(user){
    
    localStorage.setItem("admi",user)
  }
  getisadmi() {
    return localStorage.getItem("admi");
  }

  setUserLogueado(user){
    
    localStorage.setItem("user",user)
  }
  getUserLogueado() {
    return localStorage.getItem("user");
  }


  logout() {
   localStorage.removeItem("accessToken")
   localStorage.removeItem("user")
   localStorage.removeItem("admi")
   //return this.httpcliente.post('http://127.0.0.1:8000/auth/',  );
  }
  



}
