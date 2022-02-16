import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ImageuploadService } from 'src/app/Services/imageupload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res!: string

  email!: string;
  pass!: string;
  constructor(private auth: AuthService,private imageUpload:ImageuploadService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.auth.signIn(this.email, this.pass);
  }
  upload(event:any){
   this.imageUpload.upload(event);
  }
uploadImage(){
this.imageUpload.uploadImage();
}
}
