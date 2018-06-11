import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentUser: string;
  public isUserlogged: boolean;

  constructor() { }

  public login(username: string, password:string): boolean{
    let isValid: boolean = username === 'admin' && password === 'admin';
    this.isUserlogged = isValid;
    this.currentUser = username;
    return isValid;
  }

}
