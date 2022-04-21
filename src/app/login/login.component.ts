import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit, Injectable, Inject, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {

   }

  ngOnInit(): void {

  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }
}


