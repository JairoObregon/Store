import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoginServiceService} from '../../usuario/login/login-service.service'
import {userGet} from '../../usuario/userGet.model'
@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
   
  UserList:userGet[]
  constructor(private route:Router,
  private service: LoginServiceService) {  }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    let token =this.service.getToken()
    this.service.getListUser(token).subscribe(
      (data: any) =>{
        this.UserList=data
      },
      error =>{
        console.log("el error"+error)
      }
    )
  }

  Agregar(){
    this.route.navigate(['editor/formularioUsuario'])
  }
  eliminar(id:number){
    this.service.removeUser(id).subscribe(
      (data: any) =>{
        this.loadData()
        this.UserList=data
      },
      error =>{
        console.log("el error"+error)
      }
    )
    
  }
  editar(){

  }

}
