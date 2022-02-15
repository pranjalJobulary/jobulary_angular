import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IAssessmentBreifReport } from '../Models/IAssessmentBreifReport';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentBreifReportService {

  assessmentBreifReport!:AssessmentBreifReportService;
  constructor(private firestore:AngularFirestore,private auth:AuthService) { }

  addAssessmentBreifReport(assessmentBreifReport:IAssessmentBreifReport){
    return this.firestore.collection('users').doc(this.auth.userId).collection('assessmentBreifReport').add(assessmentBreifReport).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }
  getAssessmentBreifReport(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('assessmentBreifReport').snapshotChanges
  }
}
