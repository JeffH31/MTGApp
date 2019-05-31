import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login = true;

  constructor() { }

  ngOnInit() {
  }

  onLoginClick() {
    this.login = true;
  }

  onCreateClick() {
    this.login = false;
  }

}
