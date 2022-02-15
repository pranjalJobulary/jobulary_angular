import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ILookingJob } from '../Models/ILookingJob';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LookingJobService {
 lookingJob!:ILookingJob;
  constructor(private firestore:AngularFirestore,private auth:AuthService) {

   }

   addLookinJob(lookingJob:ILookingJob){
    return this.firestore.collection('users').doc(this.auth.userId).collection('lookingJob').add(lookingJob).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
   }
   getLookingJob(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('lookingJob').snapshotChanges;
   }
}
