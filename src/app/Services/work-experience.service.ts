import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IWorkExperience } from '../Models/IWorkExpereince';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  workExpereince!: IWorkExperience
  constructor(private firestore: AngularFirestore) { }

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
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('workExpereince').add(this.workExpereince);
  }

  getWork() {
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('workExpereince').snapshotChanges();
  }
}
