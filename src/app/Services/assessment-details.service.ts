import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IAssessmentBreifReport } from '../Models/IAssessmentBreifReport';
import { IAssessmentDetails } from '../Models/IAssessmentDetails';

@Injectable({
  providedIn: 'root'
})
export class AssessmentDetailsService {


  assessmentDetails!:IAssessmentDetails
  constructor(private firestore:AngularFirestore) {
   }

  getAssessmentDetails(){
    return this.firestore.collection('assessments').snapshotChanges
  }

  // Adding no.of.candidate attanded this assessment
  addUserToAssessment(assessmentBreifReport:IAssessmentBreifReport){
    return this.firestore.collection('assessments').doc('assessmentID').collection('users').add(assessmentBreifReport);
  }
}
