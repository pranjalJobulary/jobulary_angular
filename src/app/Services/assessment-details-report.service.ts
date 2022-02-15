import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IAssessmentDetailsReport } from '../Models/IAssessmentDetailReport';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentDetailsReportService {

  assessmentDetailsReport!:IAssessmentDetailsReport;

  constructor(private firestore:AngularFirestore,private auth:AuthService) {
  }

  addAssessmentDetailReport(assessmentDetailsReport:IAssessmentDetailsReport){
    return this.firestore.collection('assessments').doc('assessmentID').collection('users').doc(this.auth.userId).collection('assessmentDetailReort').add(assessmentDetailsReport).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  addUserAssessmentDetailReport(assessmentDetailsReport:IAssessmentDetailsReport){
    return this.firestore.collection('users').doc(this.auth.userId).collection('assessment').doc('assessmentID').collection('assessmentBreifReport').add(assessmentDetailsReport).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getUserAssessmentDetailReport(assessmentDetailsReport:IAssessmentDetailsReport){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('assessment').doc('assessmentID').collection('assessmentBreifReport').snapshotChanges
  }
}
