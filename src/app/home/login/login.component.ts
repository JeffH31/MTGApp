import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private service: UsersService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const enteredUsername = form.value.username;
    const enteredPassword = form.value.password;

    console.log('In onLogin, enteredUsername = ' + enteredUsername + ' enteredPassword = ' + enteredPassword)

    this.service.getUser(enteredUsername).subscribe(userData => {
      // this.post = { id: postData._id, title: postData.title, content: postData.content };
      
      console.log(userData);

      console.log('userData.username = ' + userData[0].username + ', enteredUsername = ' + enteredUsername + 
      ', userData.password = ' + userData[0].password + ', enteredPassword = ' + enteredPassword);

      if (userData[0].username === enteredUsername && userData[0].password === enteredPassword) {
        console.log('YEET MUTHAFUCKKAAA!!!')
      }
    });
  }
}
