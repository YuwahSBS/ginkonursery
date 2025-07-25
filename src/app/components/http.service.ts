import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { configuration } from "./configuration";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  sendMessage(formData: NgForm) {
    throw new Error('Method not implemented.');
  }
  config = configuration;
  apiUrl = environment.apiUrl;
  emailUrl = environment.emailUrl;
  
  post<T>(arg0: string, formData: NgForm, httpOptions: any) {
    throw new Error('Method not implemented.');
  }
  test = "How r u?";
  constructor(private http: HttpClient, private router: Router) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: "Subrat" });
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }

  // sendEmail(formData: NgForm): Observable<any> {
  //   return this.http.post<any>(`${this.emailUrl}`, formData).pipe(
  //   tap(
  //   message => console.log(message)
  //   ),
  //   catchError(this.handleError('sending message', []))
  //   );
  //   }
  // handleError(arg0: string, arg1: undefined[]): any {
  //   throw new Error('Method not implemented.');
  // }
}