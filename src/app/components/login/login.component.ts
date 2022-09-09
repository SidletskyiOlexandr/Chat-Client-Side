import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  constructor() {
  }
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  })

  ngOnInit() {
  }

}
