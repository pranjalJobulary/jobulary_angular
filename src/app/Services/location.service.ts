import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ILocation } from '../Models/ILocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location!:ILocation;
  constructor(private firestore:AngularFirestore) { }
  addLocation(location:ILocation){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('location').add(location);
  }
  getLocation(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('location').snapshotChanges;
  }
}
