import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserLogin } from "../model/user-login.type";
import { UserLoginResponse } from "../model/user-login-response";
import { CookieService } from "ngx-cookie-service";
import { catchError } from "rxjs";



@Injectable({providedIn: 'root'})
export class UserService {

    cookieService = inject(CookieService)

    http = inject(HttpClient)
    baseUrl = environment.apiUrl

    userData = signal<UserLoginResponse | null>(null)


    signUp(userLogin: UserLogin){
        const url = `${this.baseUrl}/public/signup`
        return this.http.post<UserLogin>(url, userLogin).pipe(
            catchError((err) => {
              console.log(err)
              throw err;
            })).subscribe()
    }

    login(userLogin: UserLogin){
        const url = `${this.baseUrl}/public/login`
        return this.http.post<UserLoginResponse>(url, userLogin).pipe(
            catchError((err) => {
              console.log(err)
              throw err;
            })).subscribe((data) => {
                this.userData.set(data)
            })
    }

    logOut(){
        this.userData.set(null)
        this.cookieService.delete("Authorization", "/auth")
    }

}