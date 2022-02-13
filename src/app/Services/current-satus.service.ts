import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICurrentStatus } from '../Models/ICurrentStatus';

@Injectable({
  providedIn: 'root'
})
export class CurrentStatusService {

  currentStatus!:ICurrentStatus;
  constructor(private firestore:AngularFirestore) {
   }
   addCurrentStatus(currentStatus:ICurrentStatus){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('currentStatus').add(currentStatus);
   }

   getCurrentStatus(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('honorAwards').snapshotChanges;
   }
}
