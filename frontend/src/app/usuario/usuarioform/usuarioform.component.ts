import { Component, OnInit } from '@angular/core';
import {userSet} from './../userSet.model';
import {LoginServiceService} from './../login/login-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-usuarioform',
  templateUrl: './usuarioform.component.html',
  styleUrls: ['./usuarioform.component.css']
})
export class UsuarioformComponent implements OnInit {
  enviado: boolean
  username:string
   password:string
    email:string
    is_staff=false

  constructor(private service:LoginServiceService,
    private rout:Router,
    ) { }

  ngOnInit(): void {
   // localStorage.setItem('form','desc')
   this.enviado=false
  }
  add(){
   
    let a=new userSet(this.username,this.password,this.email,this.is_staff);
    this.service.createUser(a).subscribe(
      (data) => {
        console.log(data)
        this.enviado=true
//localStorage.setItem('form','ac')
      
      },
      (error) =>{
        console.log(error)
      }
    )
    console.log(this.enviado)
    this.rout.navigate(['editor/listausuarios'])

  }

}
