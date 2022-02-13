import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEmployer } from '../Models/IEmployer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {


  employer!:IEmployer
  constructor(private firestore:AngularFirestore) { }
  addEmployer(employer:IEmployer){
    return this.firestore.collection('employer').add(employer);
  }
  getEmployer(){
    return this.firestore.collection('employer').snapshotChanges;
  }
}
