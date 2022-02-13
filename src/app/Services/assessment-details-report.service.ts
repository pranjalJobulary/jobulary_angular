import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IAssessmentDetailsReport } from '../Models/IAssessmentDetailReport';

@Injectable({
  providedIn: 'root'
})
export class AssessmentDetailsReportService {

  assessmentDetailsReport!:IAssessmentDetailsReport;

  constructor(private firestore:AngularFirestore) {
  }

  addAssessmentDetailReport(assessmentDetailsReport:IAssessmentDetailsReport){
    return this.firestore.collection('assessments').doc('assessmentID').collection('users').doc('userId').collection('assessmentDetailReort').add(assessmentDetailsReport);
  }

  addUserAssessmentDetailReport(assessmentDetailsReport:IAssessmentDetailsReport){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('assessment').doc('assessmentID').collection('assessmentBreifReport').add(assessmentDetailsReport);
  }

  getUserAssessmentDetailReport(assessmentDetailsReport:IAssessmentDetailsReport){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('assessment').doc('assessmentID').collection('assessmentBreifReport').snapshotChanges
  }
}
