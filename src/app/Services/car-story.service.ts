import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICarstory } from '../Models/ICarstory';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarStoryService {


  carStory!:ICarstory;
  constructor(private firestore:AngularFirestore,private auth:AuthService) { }

  addCarStory(carStory:ICarstory){
    return this.firestore.collection('users').doc(this.auth.userId).collection('carstory').add(carStory).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }
  getCarStory(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('carstory').snapshotChanges;
  }
}
