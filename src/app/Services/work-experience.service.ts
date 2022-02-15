import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IWorkExperience } from '../Models/IWorkExpereince';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  workExpereince!: IWorkExperience
  constructor(private firestore: AngularFirestore, private auth:AuthService) { }

  addWork() {
    this.workExpereince = {
      company: 'Infosys',
      designation: 'Full Stack Developer',
      start_date: 'June 2019',
      end_date: 'Jan 2020',
      currentlyWorking: false,
      description: '',
      verified: false,
      verifiedBy: ''
    }
    return this.firestore.collection("users").doc(this.auth.userId).collection('workExpereince').add(this.workExpereince).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getWork() {
    return this.firestore.collection("users").doc(this.auth.userId).collection('workExpereince').snapshotChanges();
  }
}
