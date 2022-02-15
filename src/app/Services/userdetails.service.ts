import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUserDetails } from '../Models/IUserDetails';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
 userDetails!:IUserDetails;
  constructor(private firestore:AngularFirestore, private auth: AuthService) { }

  addUserDetails(users: IUserDetails){
    return this.firestore.collection("users").add(users);
  }

//To get specific user
 getUser(){
    return this.firestore.collection("users").doc(this.auth.userId).snapshotChanges;
  }

// To get all user data
getAllUser(){
  return this.firestore.collection("users").snapshotChanges;
}

}
