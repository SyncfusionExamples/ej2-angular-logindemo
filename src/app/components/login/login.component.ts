import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';
  public errHide: boolean = true;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public login() {
    if (this.loginService.login(this.username.toLowerCase(), this.password.toLowerCase()))
      this.router.navigateByUrl('/layout');
    else
      this.errHide = false;
  }

}
