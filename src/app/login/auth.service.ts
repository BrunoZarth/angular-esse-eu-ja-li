import { first } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = "api/autenticarUsuario/";
  private usuarioAutenticado: boolean = false;

constructor(private httpClient: HttpClient, private router: Router) {
}

fazerLogin(usuario: Usuario){
  // this.httpClient.get<Usuario>(this.API + usuario.name).pipe(first());

  // if autenticado...
  this.usuarioAutenticado = true;
  this.router.navigate(['/home']);
}

usuarioEstaAutenticado(){
  return this.usuarioAutenticado;
}

}
