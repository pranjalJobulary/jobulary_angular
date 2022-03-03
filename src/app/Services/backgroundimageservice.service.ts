import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundimageserviceService {
  filePath!:string
  constructor(private firestorage:AngularFireStorage,private firestore:AngularFirestore,private authService:AuthService,) { }

  upload(event:any) {
    this.filePath = event.target.files[0]
  }
   // Image upload Functionality
   async uploadBackgroundImage(){
    console.log(this.filePath)
  try {
      const data = await this.firestorage.upload('/background' + Math.random() + this.filePath, this.filePath);
      data.ref.getDownloadURL().then((url) => {
        this.firestore.collection('users').doc(this.authService.userId).collection('backgroundImage').add({
          profileImage: url,
          uploadedOn: new Date
        });

      });
    } catch (error) {
      return window.alert(error);
    }
  }


}
