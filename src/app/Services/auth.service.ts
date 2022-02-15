import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { TimelinePostServiceService } from './timeline-post-service.service';
import { UserdetailsService } from './userdetails.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId!: string

  constructor(private authAngular: AngularFireAuth, private userDetails: TimelinePostServiceService, private route: Router) { }

  signIn(email: string, password: string){
    this.authAngular.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.userId = value.user?.uid ?? "Not available";
      console.log("Nice it worked!");
      console.log('Sucess', value.user?.uid),
      console.log(value.additionalUserInfo?.providerId);
      console.log(this.userId);
      this.userDetails.id = this.userId;
      this.route.navigate(['located']);
      return "Success";
    }).catch(error => {
      console.log(error);
      return error;
    })
  }

  signInwithGoogle() {
    this.authAngular.getRedirectResult()
  }
}
