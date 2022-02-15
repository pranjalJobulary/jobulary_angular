import { Component, OnInit } from '@angular/core';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { IEducationDetails } from 'src/app/Models/IEducationDetails';
import { INewjob } from 'src/app/Models/INewJob';
import { ITimeline } from 'src/app/Models/ITimeline';
import { IUserDetails } from 'src/app/Models/IUserDetails';
import { IWorkExperience } from 'src/app/Models/IWorkExpereince';
import { TimelinePostServiceService } from 'src/app/Services/timeline-post-service.service';
import { WorkExperienceService } from 'src/app/Services/work-experience.service';
import { EduDetailsService } from '../../Services/edu-details.service';

@Component({
  selector: 'app-edu-details',
  templateUrl: './edu-details.component.html',
  styleUrls: ['./edu-details.component.css']
})
export class EduDetailsComponent implements OnInit {

  workExp!: IWorkExperience[]
  timelinePosts!: ITimeline[];
  userExperience!: INewjob[];
  userBasicDetails!: IBasicDetails[];
  posts!: ITimeline;
  userDetails!: IUserDetails[];
  users!: IUserDetails;
  email!:string;
  password!: string;
  myDate!: Date;
  userId!: string;
  newdate = new Date('2010-10-04T00:00:00+00:00');
  postWritten!: string
  eduDetails!: IEducationDetails[];
  constructor(private eduService: EduDetailsService, private timeline: TimelinePostServiceService, private workService: WorkExperienceService) { }

  ngOnInit(): void {
    this.eduService.getEdu().subscribe(data => {
      this.eduDetails = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as IEducationDetails
        }
      })
    })

    this.workService.getWork().subscribe(data => {
      this.workExp = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as IWorkExperience
        }
      })
    })

    this.timeline.getTimelinePost().subscribe(data => {
      this.timelinePosts = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as ITimeline
        } 
      }
      )
    })
    
    this.timeline.getUserExperience().subscribe(data => {
      this.userExperience = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as INewjob
        }
      })
    })
    
    this.timeline.getUserBasicDetails().subscribe(data => {
      this.userBasicDetails = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as IBasicDetails
        }
      })
    })

    this.timeline.getUserDetails().subscribe(data => {
      this.userDetails = data.map(e => {
        return{
          ...e.payload.doc.data() as IUserDetails
        }
      })
    })
  }

  // addEdu() {
  //   this.eduService.addEdu().then( () => {
  //     console.log('Added successfully!')
  //   }).catch(error => console.log(error))
  // }
}
