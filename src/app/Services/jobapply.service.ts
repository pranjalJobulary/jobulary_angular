import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IJobapply } from '../Models/IJobapply';

@Injectable({
  providedIn: 'root'
})
export class JobapplyService {


  jobApply!:IJobapply;
  constructor(private firestore:AngularFirestore) { }

  addJobApply(jobApply:IJobapply){
    return this.firestore.collection('employer').doc('employerID').collection('jobpost').doc('jobpostID').collection('jobapply').add(jobApply);
  }

  getJobApply(){
    return this.firestore.collection('employer').doc('employerID').collection('jobpost').doc('jobpostID').collection('jobapply').snapshotChanges;
  }

}
