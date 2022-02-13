import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IJobpost } from '../Models/IJobpost';

@Injectable({
  providedIn: 'root'
})
export class JobpostService {

  jobPost!:IJobpost;

  constructor(private firestore:AngularFirestore) { }

  addJobPost(jobPost:IJobpost){
   return this.firestore.collection('employer').doc('employerID').collection('jobpost').add(this.addJobPost);
  }
  getJobPost(jobPost:IJobpost){
    return this.firestore.collection('employer').doc('employerID').collection('jobpost');
   }
}
