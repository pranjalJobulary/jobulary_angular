import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IVolunteering } from '../Models/IVolunteering';

@Injectable({
  providedIn: 'root'
})
export class VolunteeringService {
  volunteering!:IVolunteering;
  constructor(private firestore:AngularFirestore) {}

  addVolun(volunteering:IVolunteering){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('volunteering').add(volunteering);
  }

  getVolun(){
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('volunteering').snapshotChanges;
  }
}
