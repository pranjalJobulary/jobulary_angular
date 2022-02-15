import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICareerGoals } from '../Models/ICareerGoals';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CareergoalsService {

  careerGoals!:ICareerGoals;
  constructor(private firestore:AngularFirestore,private auth:AuthService) { }
  addCareerGoals(careerGoals:ICareerGoals){
    return this.firestore.collection('users').doc(this.auth.userId).collection('careergoals').add(careerGoals).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }

  getCareerGoals(careerGoals:ICareerGoals){
    return this.firestore.collection('users').doc('Id').collection('careergoals').snapshotChanges;
  }
}
