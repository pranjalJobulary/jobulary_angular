import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEducationDetails } from '../Models/IEducationDetails';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EduDetailsService {

  eduDetails!: IEducationDetails;
  constructor(private firestore: AngularFirestore,private auth:AuthService) { }

  addEdu(eduDetails: IEducationDetails) {


    return this.firestore.collection("users").doc(this.auth.userId).collection('educationDetails').add(this.eduDetails).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getEdu() {
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('educationDetails').snapshotChanges();
  }

  // updateEdu(eduDetail: IEducationDetails) {
  //   const varianble = this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('educationalDetails').snapshotChanges();
  //   varianble.subscribe(res => {
  //     this.eduDetails = res.map(e => {
  //       return{
  //         id: e.payload.doc.id,
  //         ...e.payload.doc.data() as IEducationDetails
  //       }
  //     })
  //   })
  // }
}
