import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUserDetails } from '../Models/IUserDetails';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
 userDetails!:IUserDetails;
  constructor(private firestore:AngularFirestore) { }

  addUserDetails(users: IUserDetails){
    return this.firestore.collection("users").add(users);
  }

//To get specific user
 getUser(){
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').snapshotChanges;
  }

// To get all user data
getAllUser(){
  return this.firestore.collection("users").snapshotChanges;
}

}
