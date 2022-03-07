import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { IEmployer } from '../Models/IEmployer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {


  employer!:IEmployer
  filePath1!:string
  filePath2!:string
  constructor(private firestore:AngularFirestore,private auth: AuthService,private firestorage:AngularFireStorage) { }

  upload1(event:any) {
    this.filePath1 = event.target.files[0]
  }
  upload2(event:any) {
    this.filePath2 = event.target.files[0]
  }
  async addEmployer(employer:IEmployer){
    console.log(this.filePath1)
    console.log(this.filePath2)
    try {
      const data = await this.firestorage.upload('/employerProfile' + Math.random() + this.filePath1, this.filePath1);
      data.ref.getDownloadURL().then(async (profileurl) => {
        const data1 = await this. firestorage.upload('employerBackground'+  Math.random()+this.filePath2,this.filePath2);
        data1.ref.getDownloadURL().then((backgroundUrl)=>{
          const userData: IEmployer = {
            userId: employer.userId,
            companyEmail: employer.companyEmail,
            companydescription: employer.companydescription,
            companyfounded: employer.companyfounded,
            companyname: employer.companyname,
            companysize: employer.companysize,
            companywebsite: employer.companywebsite,
            companysummary: employer.companysummary,
            backGroundImage: backgroundUrl,
            profileImage: profileurl,
            createOn: new Date,
            verified: employer.verified,
            companytype: employer.companytype,
            headquaters: employer.headquaters
          }
           this.firestore.collection('users').doc(this.auth.userId).collection('employers').add(userData);
        })

      });
    } catch (error) {
      return console.log(error);
    }
  }
  //To get specific employer details
  getspecificEmployer(){
    return this.firestore.collection('users').doc(this.auth.userId).collection('employers').snapshotChanges();
  }

}
