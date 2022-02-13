import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IBasicDetails } from '../Models/IBasicDetails';
@Injectable({
  providedIn: 'root'
})
export class BasicdetailsService {

basicDetails!:IBasicDetails;
  constructor(private firestore:AngularFirestore) { }

  addBasicDetails(){
    this.basicDetails = {
      createdOn: new Date(Date.now()),
      dob: '02-01-1998',
      firstName: 'xyz',
      gender: 'male',
      lastName: 'abc',
      userBasicDetails:true,
      userId:'OObdeBoIdodZLcQtPk0E52qm4aj1',
      mobileNumber:'8825885479',
      profileImage:'url',
      backGroundImage: 'url',
    }
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('basicdetails').add(this.basicDetails);
  }

  getBasicDetails() {
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('basicdetails').snapshotChanges();
  }
}
