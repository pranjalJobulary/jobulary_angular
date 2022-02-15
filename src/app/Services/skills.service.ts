import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ISkills } from '../Models/ISkills';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
skilla!:ISkills;
  constructor(private firestore:AngularFirestore,private auth:AuthService) {
   }
   addSkill(skill:ISkills){
    return this.firestore.collection('users').doc(this.auth.userId).collection('skills').add(skill).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
   }

   getSkill(){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('skills').snapshotChanges;
   }
}
