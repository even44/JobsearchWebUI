import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    loginService = inject(UserService)

    loginGroup = new FormGroup({
      email: new FormControl(``),
      password: new FormControl(``)
    })

    login(){
      console.warn(this.loginGroup.value.email)
      let userLogin: UserLogin = <UserLogin>this.loginGroup.value
      this.loginService.login(userLogin).pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe()
    }

    

}
