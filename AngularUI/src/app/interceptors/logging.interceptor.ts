import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

      

export function loggingInterceptor(
    req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {  
    let newReq = req.clone({withCredentials: true})
    console.log("Set withCredentials: true")
    console.log(req.url);  return next(newReq);
    
}


    