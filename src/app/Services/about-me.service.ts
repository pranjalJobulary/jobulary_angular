import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IAboutMe } from '../Models/IAboutme';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  aboutme!: IAboutMe;

  constructor(private firestore: AngularFirestore) { }

  addAboutMe(ab: IAboutMe){
    return this.firestore.collection('users').doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('aboutMe').add(ab);
  }
}
