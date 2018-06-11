import { Component, OnInit } from '@angular/core';
import { orderDetails } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: Object[] = [];

  constructor() { }

  ngOnInit() { 
    this.data = orderDetails;
  }

}
