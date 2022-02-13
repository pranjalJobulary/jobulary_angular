import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ISkills } from '../Models/ISkills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
skilla!:ISkills;
  constructor(private firestore:AngularFirestore) {
   }
   addSkill(skill:ISkills){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('skills').add(skill);
   }

   getSkill(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('skills').snapshotChanges;
   }
}
