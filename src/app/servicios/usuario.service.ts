import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Usuario} from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  rutaDeLaColeccion="/usuariosSalaDeJuego";
  referenciaDeLaColeccion:AngularFirestoreCollection<Usuario>;

  constructor(private bd:AngularFirestore) {
    this.referenciaDeLaColeccion=bd.collection(this.rutaDeLaColeccion);
   }


   Registrar(usuario:Usuario):any{
     return this.referenciaDeLaColeccion.add({...usuario});
   }
  
}
