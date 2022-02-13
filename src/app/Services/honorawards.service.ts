import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IHonorsAwards } from '../Models/IHonorsAwards';

@Injectable({
  providedIn: 'root'
})
export class HonorawardsService {
honorAwards!:IHonorsAwards;
  constructor(private firestore:AngularFirestore) {
   }
   addHonorAwards(honorAwards:IHonorsAwards){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('honorAwards').add(honorAwards);
   }
   getHonorAwards(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('honorAwards').snapshotChanges;
   }
}
