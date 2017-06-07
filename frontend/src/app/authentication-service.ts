import { Component, Injectable, OnInit } from "@angular/core";import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationService implements OnInit {

  ngOnInit(): void {
    this.login().subscribe();
  }

  authenticated = false;

  constructor(private http: Http) {
  }

  login() {
    return this.http.get("./api/user")
      .map(response => {
        this.authenticated = true;
        return response.json();
      })
      .catch(() => {
        this.authenticated = false;
        return Observable.of("");
      });
  }

  logout() {
    this.http.post('./logout', {})
      .map(response => {
        this.authenticated = false;
      })
      .catch(() => {
        this.authenticated = false;
        return Observable.of("");
      }).subscribe();

  }


}
