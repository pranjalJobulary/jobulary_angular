import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ILocation } from '../Models/ILocation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location!:ILocation;
  constructor(private firestore:AngularFirestore, private auth: AuthService,) { }
  async addLocation(location:ILocation){
    try {
      const data_1 = await this.firestore.collection('users').doc(this.auth.userId).collection('location').add(location);
      console.log("Success" + data_1.id);
    } catch (error) {
      return console.log(error);
    }
  }
  getLocation(){
    return this.firestore.collection('users').doc(this.auth.userId).collection('location').snapshotChanges();
  }

   checkbasicDetails() {
     this.firestore.collection("users").doc(this.auth.userId).collection('location').get().subscribe(data=>{
      if (data.empty) {
        console.log('not present')
      } else {
        console.log('present')
        console.log(data.size)
      }
    });
  }
}
