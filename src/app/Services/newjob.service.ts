import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { INewjob } from '../Models/INewJob';

@Injectable({
  providedIn: 'root'
})
export class NewjobService {
  newJob!:INewjob;
  constructor(private firestore:AngularFirestore) {}
  addNewJob(newJob:INewjob){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('newJob').add(newJob);
  }

  getNewJob(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('newJob').snapshotChanges;
  }
}
