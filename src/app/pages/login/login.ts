import { Component } from '@angular/core';
import { LoginRequest } from '../../models/login/login-request.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginRequest: LoginRequest = {
    email: '',
    password: ''
  };

  login() {
    console.log('Tentando login com:', this.loginRequest);
  }

  esqueciSenha() {
    console.log('Redirecionar para recuperação de senha');
  }
}
