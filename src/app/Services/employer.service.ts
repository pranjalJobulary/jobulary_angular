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
  //To get all employer deatils
  getAllEmployer(){
    return this.firestore.collection('employer').snapshotChanges;
  }

  //To get specific employer details
  //pass employerID through  using usermodel  Eg:usermodel.employerID
  getspecificEmployer(){
    return this.firestore.collection('employer').doc('employerID').snapshotChanges;
  }

}
