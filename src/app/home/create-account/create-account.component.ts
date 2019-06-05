import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private service: UsersService) { }

  ngOnInit() {
  }

  onCreateUser(form: NgForm) {
    console.log('in onCreateUser in component')
    if (form.invalid) {
      return;
    }
    
    console.log('in component, email: ' + form.value.email);
    this.service.addUser(
      form.value.firstName,
      form.value.lastName,
      form.value.username,
      form.value.password,
      form.value.email
    );
    
    form.resetForm();
  }

}
