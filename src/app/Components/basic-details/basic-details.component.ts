import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { AuthService } from 'src/app/Services/auth.service';
import { BackgroundimageserviceService } from 'src/app/Services/backgroundimageservice.service';
import { BasicdetailsService } from 'src/app/Services/basicdetails.service';
import { ImageuploadService } from 'src/app/Services/imageupload.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {


  basicDetails!: IBasicDetails[]

  basicDetilsVar: IBasicDetails = {
    dob: '',
    firstName: '',
    gender: '',
    lastName: '',
    createdOn : new Date,
    userId:'',
    mobileNumber:''
  }
  constructor(private imageUpload:ImageuploadService,private basicdetailService:BasicdetailsService,private backgroundImageService:BackgroundimageserviceService,private auth:AuthService,private route: Router,) { }

  ngOnInit(): void {
  }

  async addBasicDetails() {
    this.basicDetilsVar.userId = this.auth.userId;
    this.basicdetailService.addBasicDetails(this.basicDetilsVar).then(() => {
      this.route.navigate(['located']);
    }).catch(error => console.log(error))
   await this.uploadProfileImage()
   await this.uploadBackGroundImage()
  }

  upload1(event:any){
    this.imageUpload.upload(event);
   }
 uploadProfileImage(){
 this.imageUpload.uploadProfileImage();
 }
 upload2(event:any){
  this.backgroundImageService.upload(event);
 }
uploadBackGroundImage(){
this.backgroundImageService.uploadBackgroundImage();
}
}
