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

  addWork(workExp: IWorkExperience) {
    return this.firestore.collection("users").doc(this.auth.userId).collection('workExpereince').add(workExp).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getWork() {
    return this.firestore.collection("users").doc(this.auth.userId).collection('workExpereince').snapshotChanges();
  }
}
