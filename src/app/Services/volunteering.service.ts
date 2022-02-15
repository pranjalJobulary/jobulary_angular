import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IVolunteering } from '../Models/IVolunteering';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VolunteeringService {
  volunteering!:IVolunteering;
  constructor(private firestore:AngularFirestore,private auth:AuthService) {}

  addVolun(volunteering:IVolunteering){
    return this.firestore.collection('users').doc(this.auth.userId).collection('volunteering').add(volunteering).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getVolun(){
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('volunteering').snapshotChanges;
  }
}
