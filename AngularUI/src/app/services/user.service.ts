import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserLogin } from "../model/user-login.type";
import { UserLoginResponse } from "../model/user-login-response";



@Injectable({providedIn: 'root'})
export class UserService {
    http = inject(HttpClient)
    baseUrl = environment.apiUrl

    userLoginResponse: UserLoginResponse | null = null


    signUp(userLogin: UserLogin){
        const url = `${this.baseUrl}/public/signup`
        return this.http.post<UserLogin>(url, userLogin)
    }

    login(userLogin: UserLogin){
        const url = `${this.baseUrl}/public/login`
        return this.http.post(url, userLogin)
    }

    logOut(){
        this.userLoginResponse = null
    }

}