import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { IEducationDetails } from 'src/app/Models/IEducationDetails';
import { INewjob } from 'src/app/Models/INewJob';
import { ITimeline } from 'src/app/Models/ITimeline';
import { IUserDetails } from 'src/app/Models/IUserDetails';
import { IWorkExperience } from 'src/app/Models/IWorkExpereince';
import { AuthService } from 'src/app/Services/auth.service';
import { TimelinePostServiceService } from 'src/app/Services/timeline-post-service.service';
import { WorkExperienceService } from 'src/app/Services/work-experience.service';
import { EduDetailsService } from '../../Services/edu-details.service';

@Component({
  selector: 'app-edu-details',
  templateUrl: './edu-details.component.html',
  styleUrls: ['./edu-details.component.css']
})
export class EduDetailsComponent implements OnInit {


  educationdetailsVar: IEducationDetails = {
    typeOfEdu: '',
          instituteName: '',
          userId:'',
          qualifications: '',
       
          percentage:'',
          startYear: '',
          endYear: '',
          description: '',
          verified:null,
          createdON: new Date,
          documentUrl:'',

  }
  constructor(private eduService: EduDetailsService, private auth: AuthService, private route: Router,) { }

  ngOnInit(): void {
}

upload(event:any){
  this.eduService.upload(event);
 }
addEducations() {
  this.educationdetailsVar.userId = this.auth.userId;
  this.eduService.addEducation(this.educationdetailsVar).then(() => {
    this.route.navigate(['profile']);
  }).catch(error => console.log(error))
}
}
