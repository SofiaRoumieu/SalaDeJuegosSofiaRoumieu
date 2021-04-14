import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {LoginComponent} from './componentes/login/login.component';
import {QuienSoyComponent} from './componentes/quien-soy/quien-soy.component';
import {ChatComponent} from './paginas/chat/chat.component';
import {RegistroComponent} from './componentes/registro/registro.component';

const routes : Routes=[
  {path: '' , component: HomeComponent},
  {path: 'Home' , component: HomeComponent},
  {path: 'Login' , component: LoginComponent},
  {path: 'QuienSoy' , component: QuienSoyComponent},
  {path: 'Charla' , component: ChatComponent},
  {path: 'Registro', component: RegistroComponent},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
