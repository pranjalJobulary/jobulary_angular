import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ILookingJob } from '../Models/ILookingJob';

@Injectable({
  providedIn: 'root'
})
export class LookingJobService {
 lookingJob!:ILookingJob;
  constructor(private firestore:AngularFirestore) {

   }

   addLookinJob(lookingJob:ILookingJob){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('lookingJob').add(lookingJob);
   }
   getLookingJob(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('lookingJob').snapshotChanges;
   }
}
