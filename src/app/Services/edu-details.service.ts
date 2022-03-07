import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { IEducationDetails } from '../Models/IEducationDetails';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EduDetailsService {

  eduDetails!: IEducationDetails;
  filePath!:string
  constructor(private firestore: AngularFirestore,private auth:AuthService,private firestorage:AngularFireStorage,) { }
  upload(event:any) {
    this.filePath = event.target.files[0]
  }
  async addEducation(eduDetails: IEducationDetails) {
    console.log(this.filePath)
    try {
      const data = await this.firestorage.upload('/educationDetail' + Math.random() + this.filePath, this.filePath);
      data.ref.getDownloadURL().then((url) => {
        const userData: IEducationDetails = {
          userId:eduDetails.userId,
          typeOfEdu: eduDetails.typeOfEdu,
          instituteName: eduDetails.instituteName,
          qualifications: eduDetails.qualifications,
          percentage:eduDetails.percentage,
          startYear: eduDetails.startYear,
          endYear: eduDetails.endYear,
          description: eduDetails.description,
          verified:eduDetails.verified,
          createdON: new Date,
          documentUrl:eduDetails.documentUrl
            }
         this.firestore.collection('users').doc(this.auth.userId).collection('educationDetails').add(userData);

      });

    } catch (error) {
      return console.log(error);
    }
  }

  getEdu() {
    return this.firestore.collection("users").doc(this.auth.userId).collection('educationDetails').snapshotChanges();
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
