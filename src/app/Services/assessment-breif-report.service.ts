import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IAssessmentBreifReport } from '../Models/IAssessmentBreifReport';

@Injectable({
  providedIn: 'root'
})
export class AssessmentBreifReportService {

  assessmentBreifReport!:AssessmentBreifReportService;
  constructor(private firestore:AngularFirestore) { }

  addAssessmentBreifReport(assessmentBreifReport:IAssessmentBreifReport){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('assessmentBreifReport').add(assessmentBreifReport);
  }
  getAssessmentBreifReport(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('assessmentBreifReport').snapshotChanges
  }
}
