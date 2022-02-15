import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICurrentStatus } from '../Models/ICurrentStatus';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentStatusService {

  currentStatus!:ICurrentStatus;
  constructor(private firestore:AngularFirestore,private auth:AuthService) {
   }
   addCurrentStatus(currentStatus:ICurrentStatus){
    return this.firestore.collection('users').doc(this.auth.userId).collection('currentStatus').add(currentStatus).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
   }

   getCurrentStatus(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('honorAwards').snapshotChanges;
   }
}
