import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IHonorsAwards } from '../Models/IHonorsAwards';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HonorawardsService {
honorAwards!:IHonorsAwards;
  constructor(private firestore:AngularFirestore, private auth:AuthService) {
   }
   addHonorAwards(honorAwards:IHonorsAwards){
    return this.firestore.collection('users').doc(this.auth.userId).collection('honorAwards').add(honorAwards).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
   }
   getHonorAwards(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('honorAwards').snapshotChanges;
   }
}
