import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLogin } from '../../model/user-login.type';
import { catchError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
    userService = inject(UserService)
    loginState = signal(true)

    loginGroup = new FormGroup({
      email: new FormControl(``, [Validators.required, Validators.email]),
      password: new FormControl(``, [Validators.required, Validators.minLength(8)])
    })

    login(){
      console.warn(this.loginGroup.value.email)
      let userLogin: UserLogin = <UserLogin>this.loginGroup.value
      this.userService.login(userLogin)
    }

    register(){
      console.warn(this.loginGroup.value.email)
      let userLogin: UserLogin = <UserLogin>this.loginGroup.value
      this.userService.signUp(userLogin)
    }


    

}
