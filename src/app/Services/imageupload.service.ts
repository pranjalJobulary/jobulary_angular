import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {
  filePath:String | undefined

  constructor(private firestorage:AngularFireStorage,){
  }

  upload(event:any) {
    this.filePath = event.target.files[0]
  }

  uploadImage(){
    console.log(this.filePath)
    this.firestorage.upload('/images'+Math.random()+this.filePath, this.filePath);


  }
}
