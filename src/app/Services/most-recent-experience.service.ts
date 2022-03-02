import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IMostRecentExperience } from '../Models/IMostRecentExperience';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MostRecentExperienceService {
  mostRecentExperience!:IMostRecentExperience;
  constructor(private firestore:AngularFirestore, private auth: AuthService,) { }
  async addLocation(mostRecentExperience:IMostRecentExperience){
    try {
      const data_1 = await this.firestore.collection('users').doc(this.auth.userId).collection('mostrecentexperience').add(mostRecentExperience);
      console.log("Success" + data_1.id);
    } catch (error) {
      return console.log(error);
    }
  }
  getLocation(){
    return this.firestore.collection('users').doc(this.auth.userId).collection('mostrecentexperience').snapshotChanges();
  }
}
