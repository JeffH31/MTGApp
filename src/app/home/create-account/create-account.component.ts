import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

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
    if (form.invalid) {
      return;
    }
    
    this.service.addUser(form.value.firstName, form.value.lastName, form.value.username, form.value.password, form.value.email);
    
    form.resetForm();
  }

}
