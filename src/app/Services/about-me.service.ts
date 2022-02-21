import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IAboutMe } from '../Models/IAboutme';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  aboutme!: IAboutMe;

  constructor(private firestore: AngularFirestore, private auth:AuthService) { }

  addAboutMe(ab: IAboutMe){
    return this.firestore.collection('users').doc(this.auth.userId).collection('aboutMe').add(ab).then(data=>{
      console.log("Success" + data.id)
    }).catch(error => console.log(error));
  }


  getAboutMe(){
    return this.firestore.collection('users').doc(this.auth.userId).collection('aboutMe').snapshotChanges();
  }
}
