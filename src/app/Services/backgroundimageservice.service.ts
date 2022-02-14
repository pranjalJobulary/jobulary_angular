import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage/storage';

@Injectable({
  providedIn: 'root'
})
export class BackgroundimageserviceService {

  constructor(private firestorage:AngularFireStorage,) { }

  uploadBackGroundImage(){
    return this.firestorage.upload('\image',Math.random())
  }
}
