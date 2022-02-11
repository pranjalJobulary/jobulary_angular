import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEducationDetails } from '../Models/IEducationDetails';

@Injectable({
  providedIn: 'root'
})
export class EduDetailsService {

  eduDetails!: IEducationDetails;
  constructor(private firestore: AngularFirestore) { }

  addEdu() {
    this.eduDetails = {
      typeOfEdu: 'Graduation',
      instituteName: 'SRM IST',
      qualifications: 'B.Tech',
      major: 'IT',
      percentage: '76.8',
      startYear: 'July 2015',
      endYear: 'June 2019',
      description: 'Great expereience',
      verified: false,
      verifiedBy: ''
    }

    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('educationDetails').add(this.eduDetails);
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
