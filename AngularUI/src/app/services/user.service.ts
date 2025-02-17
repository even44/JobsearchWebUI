import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserLogin } from "../model/user-login.type";
import { UserLoginResponse } from "../model/user-login-response";
import { CookieService } from "ngx-cookie-service";
import { catchError } from "rxjs";
import { Router } from "@angular/router";



@Injectable({providedIn: 'root'})
export class UserService {

    cookieService = inject(CookieService)
    router = inject(Router)
    http = inject(HttpClient)
    baseUrl = environment.apiUrl

    userData = signal<UserLoginResponse | null>(null)

    constructor(){
        this.getUserDataFromStorage()
    }

    getUserDataFromStorage(){
        var storageUserData = localStorage.getItem("userData")
        console.log("Tryget userData")
        if (storageUserData != null) {
            var data = JSON.parse(storageUserData)
            this.userData.set(data)
            console.log("Got userdata", this.userData())
        }
       
    }


    signUp(userLogin: UserLogin){
        const url = `${this.baseUrl}/public/signup`
        return this.http.post<UserLogin>(url, userLogin).pipe(
            catchError((err) => {
              console.log(err)
              throw err;
            })).subscribe(() => {
                this.login(userLogin)
            })
    }

    login(userLogin: UserLogin){
        const url = `${this.baseUrl}/public/login`
        return this.http.post<UserLoginResponse>(url, userLogin).pipe(
            catchError((err) => {
              console.log(err)
              throw err;
            })).subscribe((data) => {
                this.userData.set(data)
                var userString = JSON.stringify(data)
                localStorage.setItem("userData", userString)
                console.log("Stored userdata")
                this.router.navigate(["/applications"])
            })
    }

    logOut(){
        console.log("Loggin out")
        this.userData.set(null)
        localStorage.clear()
        this.router.navigate(["/"])
    }

    

}