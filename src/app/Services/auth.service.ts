import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { IUserDetails } from '../Models/IUserDetails';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user
  userId!: string

  constructor(private authAngular: AngularFireAuth, private route: Router,private firestore:AngularFirestore,) {

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.authAngular.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', null!);
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }


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
    this.SetUserData(value.user!);
    this.route.navigate(['timeline'])
     console.log(value.user);
   }).catch(error => {
    window.alert(error)
  })
  }


  checkLocationDetails(){
    this.firestore.collection("users").doc(this.userId).collection('basicdetails').get().subscribe(data=>{
      if (data.empty) {
        this.route.navigate(['basicdetails']);
        console.log('not present')
      } else {
        this.firestore.collection("users").doc(this.userId).collection('workExpereince').get().subscribe(data=>{
          if (data.empty) {
            this.route.navigate(['basicdetails']);
            console.log('currentWork not present')
          } else {
            this.firestore.collection("users").doc(this.userId).collection('aboutMe').get().subscribe(data=>{
              if (data.empty) {
                this.route.navigate(['aboutMe']);
                console.log('aboutMe not present')
              } else {
                this.route.navigate(['profile']);
                console.log(' timeline present')
                console.log(data.size)
              }
            });
          }
        });

        console.log('location present')
        console.log(data.size)
      }
    });
  }
  registerPage(){
    return this.route.navigate(['registration'])
  }

    // Send email verfificaiton when new user sign up
  async  SendVerificationEMail() {
      return this.authAngular.currentUser.then((user)=>{
        user!.sendEmailVerification()
        window.alert('We sent a verification link '+ user!.email)
        this.route.navigate(['verify-email'])
      }).catch((error)=>{
        window.alert(error)
      })

    }

    SetUserData(user: { uid: any; email: any; displayName: any; photoURL: any; emailVerified: any; }) {
      const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
      const userData: IUserDetails = {
    id: user.uid,
    emailVerified:user.emailVerified
      }
      return userRef.set(userData, {
        merge: true
      })
    }

    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user')!);
      return (user !== null && user.emailVerified !== false) ? true : false;
    }

    // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.authAngular.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationEMail();
        this.SetUserData(result.user!);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Reset Password
  ForgotPassword(passwordResetEmail:string){
    return this.authAngular.sendPasswordResetEmail(passwordResetEmail).then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  //SignOut
  SignOut(){
    return this.authAngular.signOut().then(() => {
      localStorage.removeItem('user');
      this.route.navigate(['login']);
    })
  }
}
