import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res!: string
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.auth.signIn('pranjal@jobulary.io', 'Pranjal@1');
  }
}
