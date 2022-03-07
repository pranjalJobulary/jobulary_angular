import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { IExperience } from '../Models/IExperience';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experience!:IExperience
  filePath!:string

  constructor(private firestore:AngularFirestore, private auth: AuthService,private firestorage:AngularFireStorage,) { }


  upload(event:any) {
    this.filePath = event.target.files[0]
  }
  async addExperience(experience:IExperience){
    console.log(this.filePath)
    try {
      const data = await this.firestorage.upload('/experience' + Math.random() + this.filePath, this.filePath);
      data.ref.getDownloadURL().then((url) => {
        const userData: IExperience = {
          userId:experience.userId,
  company: experience.company,
  employmentType:experience.employmentType,
  location: experience.location,
  start_date: experience.start_date,
  briefDescripition: experience.briefDescripition,
  documentUrl:url,
  verified:null,
  createdON: new Date
            }
         this.firestore.collection('users').doc(this.auth.userId).collection('experiences').add(userData);

      });

    } catch (error) {
      return console.log(error);
    }
  }

  getExperiances(){
    return this.firestore.collection('users').doc(this.auth.userId).collection('experiences').snapshotChanges();
  }


}

