import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IBasicDetails } from '../Models/IBasicDetails';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class BasicdetailsService {

basicDetails!:IBasicDetails;
  constructor(private firestore:AngularFirestore,private auth:AuthService) { }

  addBasicDetails(basicDetails:IBasicDetails){

    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('basicdetails').add(this.basicDetails).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getBasicDetails() {
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('basicdetails').snapshotChanges();
  }


//Example of cchecking the collection is exists or not
  checkbasicDetails() {
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('basicdetails').get().subscribe(data=>{
      if (data.empty) {
        console.log('not present')
      } else {
        console.log('present')
        console.log(data.size)
      }
    });
  }
}
