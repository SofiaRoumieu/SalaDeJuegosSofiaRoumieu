import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {Usuario} from '../../clases/usuario';
import {UsuarioService} from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  usuario:Usuario;

  constructor(private router: Router, private servicioUsuario:UsuarioService)
  {
    this.usuario= new Usuario();
    
  }

  ngOnInit(): void {
  }

  Registrar(){
    this.servicioUsuario.Registrar(this.usuario).then(()=>{
      console.log("se guardo el usuario FIRE");
      this.router.navigate(['/Home']);
      })
      .catch(error => {
        console.log("error al registrar el usuario");
        alert("Los datos son incorrectos o no existe el usuario");
      })
  }
}
