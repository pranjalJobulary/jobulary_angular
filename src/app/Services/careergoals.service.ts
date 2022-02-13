import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICareerGoals } from '../Models/ICareerGoals';

@Injectable({
  providedIn: 'root'
})
export class CareergoalsService {

  careerGoals!:ICareerGoals;
  constructor(private firestore:AngularFirestore) { }
  addCareerGoals(careerGoals:ICareerGoals){
    return this.firestore.collection('users').doc('Id').collection('careergoals').add(careerGoals);
  }

  getCareerGoals(careerGoals:ICareerGoals){
    return this.firestore.collection('users').doc('Id').collection('careergoals').snapshotChanges;
  }
}
