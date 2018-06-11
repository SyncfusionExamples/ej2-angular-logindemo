import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (!this.loginService.isUserlogged)
      this.router.navigateByUrl('/login');
  }

  public logout() {
    this.router.navigateByUrl('/login');
  }

  public navToHome() {
    // var fg = this.routes;
    this.router.navigateByUrl('/home');
  }

  public navToGrid() {
    this.router.navigateByUrl('/grid');
  }

}
