import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId!: string

  constructor(private authAngular: AngularFireAuth, private route: Router,private firestore:AngularFirestore,) { }

  signIn(email: string, password: string){
    this.authAngular.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.userId = value.user?.uid ?? "Not available";
      console.log("Nice it worked!");
      console.log('Sucess', value.user?.uid);
      console.log(value.additionalUserInfo?.providerId);
      console.log(this.userId);
   this.checkLocationDetails();
      return "Success";
    }).catch(error => {
      console.log(error);
      return error;
    })
  }

  signInWithGoogle(){
   return this.authAngular.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(value =>{
     console.log(value.user);
   }).catch(error => {
    console.log(error);
    return error;
  })
  }


  checkLocationDetails(){
    this.firestore.collection("users").doc(this.userId).collection('location').get().subscribe(data=>{
      if (data.empty) {
        this.route.navigate(['located']);
        console.log('not present')
      } else {

        this.route.navigate(['currentWork']);
        console.log('present')
        console.log(data.size)
      }
    });
  }
}
