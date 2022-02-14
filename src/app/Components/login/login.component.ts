import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res!: string

  email!: string;
  pass!: string;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    debugger
    this.auth.signIn(this.email, this.pass);
  }
}
