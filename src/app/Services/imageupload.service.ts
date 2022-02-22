import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {
  filePath:String | undefined

  constructor(private firestorage:AngularFireStorage,private firestore:AngularFirestore,private authService:AuthService,  private toast: HotToastService,){
  }

  upload(event:any) {
    this.filePath = event.target.files[0]
  }

  // Image upload Functionality
  uploadProfileImage(){
    console.log(this.filePath)
  return  this.firestorage.upload('/profile'+Math.random()+this.filePath, this.filePath).then((data)=>{
      data.ref.getDownloadURL().then((url)=>{
         this.firestore.collection('users').doc(this.authService.userId).collection('profileImage').add({
           profileImage:url,
           uploadedOn:new Date
         })

      })
    }).catch((error)=>
    window.alert(error)
    )
  }


  getProfileImage(){
    return this.firestore.collection('users').doc(this.authService.userId).collection('profileImage').snapshotChanges();
  }
  uploadBacgroundImage(){
    console.log(this.filePath)
  return  this.firestorage.upload('/background'+Math.random()+this.filePath, this.filePath).then((data)=>{
      data.ref.getDownloadURL().then((url)=>{
         this.firestore.collection('users').doc(this.authService.userId).collection('backgroundImage').add({
           profileImage:url,
           uploadedOn:new Date
         })
      })
    }).catch((error)=>
    window.alert(error)
    )
  }

}
