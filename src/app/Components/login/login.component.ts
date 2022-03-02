import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AuthService } from 'src/app/Services/auth.service';
import { BasicdetailsService } from 'src/app/Services/basicdetails.service';
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
  constructor(private auth: AuthService,private imageUpload:ImageuploadService,private basicdetails:BasicdetailsService,private fun: AngularFireFunctions) { }

  ngOnInit(): void {
  }

signIn() {
    this.auth.signIn(this.email, this.pass);
}

upload(event:any){
   this.imageUpload.upload(event);
  }
uploadProfileImage(){
this.imageUpload.uploadProfileImage();
}

uploadBackgroundImage(){
  this.imageUpload.uploadBacgroundImage();
  }

checkBasicDetailCollectionExist(){
this.basicdetails.checkbasicDetails();
}

signInWithGoogle(){
  this.auth.signInWithGoogle()
}

registration(){
  this.auth.registerPage();
}

//reset password
forgotPassword(){
  this.auth.ForgotPassword(this.email)
}
sendEmail() {
  const callable = this.fun.httpsCallable('kycEmailVerification');
  callable({to:'kumaresan64761@gmail.com',name:'kumaresan',phone:'8825885479',message:'Please verify my education details'}).subscribe();
}

}
