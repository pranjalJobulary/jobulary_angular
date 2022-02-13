import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICarstory } from '../Models/ICarstory';

@Injectable({
  providedIn: 'root'
})
export class CarStoryService {


  carStory!:ICarstory;
  constructor(private firestore:AngularFirestore) { }

  addCarStory(carStory:ICarstory){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('carstory').add(carStory);
  }
  getCarStory(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('carstory').snapshotChanges;
  }
}
