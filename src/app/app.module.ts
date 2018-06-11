import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonAllModule } from '@syncfusion/ej2-ng-buttons';
import { GridAllModule } from '@syncfusion/ej2-ng-grids';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'prefix' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ButtonAllModule,
    GridAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
