import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ACESS_TOKEN } from "src/environments/environment";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const reqWithAuth = req.clone({
            setHeaders: {
                Authorization: `Bearer ${ACESS_TOKEN}`
            }
        })

        return next.handle(reqWithAuth)
        
    }
}