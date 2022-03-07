import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { IAboutMe } from 'src/app/Models/IAboutme';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { IEducationDetails } from 'src/app/Models/IEducationDetails';
import { IExperience } from 'src/app/Models/IExperience';
import { ILocation } from 'src/app/Models/ILocation';
import { IProfileImage } from 'src/app/Models/IProfileImage';
import { IWorkExperience } from 'src/app/Models/IWorkExpereince';
import { AboutMeService } from 'src/app/Services/about-me.service';
import { AuthService } from 'src/app/Services/auth.service';
import { BackgroundimageserviceService } from 'src/app/Services/backgroundimageservice.service';
import { BasicdetailsService } from 'src/app/Services/basicdetails.service';
import { EduDetailsService } from 'src/app/Services/edu-details.service';
import { ExperienceService } from 'src/app/Services/experience.service';
import { ImageuploadService } from 'src/app/Services/imageupload.service';
import { LocationService } from 'src/app/Services/location.service';
import { WorkExperienceService } from 'src/app/Services/work-experience.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  flag: number = 0;
  eduDetails!: IEducationDetails[]
  experience!:IExperience[]
  workExpereince!: IWorkExperience[]
  profileImage!:IProfileImage[]
  backgroundImage!:IProfileImage[]
  basicdetails!:IBasicDetails[]
  aboutMe!:IAboutMe[]
  location!:ILocation[]
  constructor(private fun: AngularFireFunctions,private imageService:ImageuploadService,private basicdetailsService:BasicdetailsService,private aboutMeService:AboutMeService,private locationService:LocationService,private backgroundImageService:BackgroundimageserviceService,private workExperienceService:WorkExperienceService,private educationWorkExperiance:EduDetailsService,private experiencService:ExperienceService, private auth:AuthService) { }
  ngOnInit(): void {
    this.imageService.getProfileImage().subscribe( data=>{
      this.profileImage = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IProfileImage
        }
      })
    })

    this.basicdetailsService.getBasicDetails().subscribe( data=>{
      this.basicdetails = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IBasicDetails
        }
      })
      console.log(data)
    })

    this.locationService.getLocation().subscribe( data=>{
      this.location = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as ILocation
        }
      })
      console.log(data)
    })
    this.aboutMeService.getAboutMe().subscribe( data=>{
      this.aboutMe = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IAboutMe
        }
      })
      console.log(data)
    })

    this.backgroundImageService.getBackgroundImage().subscribe( data=>{
      this.backgroundImage = data. map( e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IProfileImage
        }
      })
    })
    this.workExperienceService.getWork().subscribe( data=>{
      this.workExpereince = data. map( e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IWorkExperience
        }
      })
    })
    this.educationWorkExperiance.getEdu().subscribe( data=>{
      this.eduDetails = data. map( e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IEducationDetails
        }
      })
    })
    this.experiencService.getExperiances().subscribe( data=>{
      this.experience = data. map( e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IExperience
        }
      })
    })

  }

  openVerification() {
    this.flag = 1
  }

  sendEmail(docId:string) {
    const callable = this.fun.httpsCallable('workExperienceVerification');
    callable({userId:this.auth.userId,docId:docId,to:'kumaresan64761@gmail.com',name:'kumaresan',phone:'8825885479',message:'Please verify my education details'}).subscribe();
  }
  }






