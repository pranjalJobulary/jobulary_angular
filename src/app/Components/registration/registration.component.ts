import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  email!: string;
  pass!: string;
  constructor(private auth: AuthService,) { }

  ngOnInit(): void {
  }
signUp(){
  this.auth.SignUp(this.email,this.pass);
}
}
