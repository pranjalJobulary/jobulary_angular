import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TimelinePostServiceService } from './timeline-post-service.service';
import { UserdetailsService } from './userdetails.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId!: string

  constructor(private authAngular: AngularFireAuth, private userDetails: TimelinePostServiceService) { }

  signIn(email: string, password: string){
    this.authAngular.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.userId = value.user?.uid ?? "Not available";
      console.log("Nice it worked!");
      console.log('Sucess', value.user?.uid),
      console.log(value.additionalUserInfo?.providerId);
      console.log(this.userId);
      this.userDetails.getUserDetails();
    }).catch(error => {
      console.log(error);
    })
  }

  signInwithGoogle() {
    this.authAngular.getRedirectResult()
  }
}
