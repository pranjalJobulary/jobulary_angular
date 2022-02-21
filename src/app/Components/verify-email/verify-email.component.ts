import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {


  userData: any; // Save logged in user
  constructor(private auth: AuthService) {
   this.userData= this.auth.userData
  }

  ngOnInit(): void {
  }

verificationEmail(){
  this.auth.SendVerificationEMail();
}

}
