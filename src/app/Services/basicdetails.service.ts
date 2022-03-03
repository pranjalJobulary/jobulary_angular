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

  async addBasicDetails(basicDetails:IBasicDetails){
    try {
      const data_1 = await this.firestore.collection("users").doc(this.auth.userId).collection('basicdetails').add(basicDetails);
      console.log("Success" + data_1.id);
    } catch (error) {
      return console.log(error);
    }
  }

  getBasicDetails() {
    return this.firestore.collection("users").doc(this.auth.userId).collection('basicdetails').snapshotChanges();
  }


//Example of cchecking the collection is exists or not
  checkbasicDetails() {
    return this.firestore.collection("users").doc(this.auth.userId).collection('basicdetails').get().subscribe(data=>{
      if (data.empty) {
        console.log('not present')
      } else {
        console.log('present')
        console.log(data.size)
      }
    });
  }
}
