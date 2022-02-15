import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { INewjob } from '../Models/INewJob';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewjobService {
  newJob!:INewjob;
  constructor(private firestore:AngularFirestore,private auth:AuthService) {}
  addNewJob(newJob:INewjob){
    return this.firestore.collection('users').doc(this.auth.userId).collection('newJob').add(newJob).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getNewJob(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('newJob').snapshotChanges;
  }
}
