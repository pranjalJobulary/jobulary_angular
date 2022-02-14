import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {

  constructor(private firestorage:AngularFireStorage,){
  }


  uploadImage(){
    return this.firestorage.upload('\image',Math.random())
  }
}
