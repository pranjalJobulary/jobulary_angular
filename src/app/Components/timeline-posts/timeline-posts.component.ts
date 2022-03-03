import { Component, OnInit } from '@angular/core';
import { fromDocRef } from '@angular/fire/compat/firestore';
import {identity, Observable} from 'rxjs';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { INewjob } from 'src/app/Models/INewJob';
import { IProfileImage } from 'src/app/Models/IProfileImage';
import { ITimeline } from 'src/app/Models/ITimeline';
import { IUserDetails } from 'src/app/Models/IUserDetails';
import { BasicdetailsService } from 'src/app/Services/basicdetails.service';
import { ImageuploadService } from 'src/app/Services/imageupload.service';
import { TimelinePostServiceService } from 'src/app/Services/timeline-post-service.service';

@Component({
  selector: 'app-timeline-posts',
  templateUrl: './timeline-posts.component.html',
  styleUrls: ['./timeline-posts.component.css']
})
export class TimelinePostsComponent implements OnInit {
  profileImage!:IProfileImage[]
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

  constructor(private timeline: TimelinePostServiceService,private imageService:ImageuploadService,private basicDetailsService:BasicdetailsService) { }

  ngOnInit(): void {
    this.timeline.getTimelinePost().subscribe(data => {
      this.timelinePosts = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as ITimeline
        }
      }
      )
    })

    this.imageService.getProfileImage().subscribe( data=>{
      this.profileImage = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IProfileImage
        }
      })
    })
    this.basicDetailsService.getBasicDetails().subscribe(data => {
      this.userBasicDetails = data.map(e =>{
       return {
         id: e.payload.doc.id,
         ...e.payload.doc.data() as IBasicDetails
       }
      })
     })
   }


   addPost (post: string) {
    this.myDate = new Date();

     this.posts = {
       createdOn: this.myDate,
       documentId: '',
       documentLocation: '',
       documentUrl: '',
       imageLocation: '',
       imageUrl: '',
       postContent: post ,
       profileImage: '',
       userId: '',
       userName: '',
       videoLocation: '',
       videoUrl: ''

     }
     this.postWritten =  '';
     this.timeline.createPost(this.posts).then(function(docRef) {
       console.log('Added');
       console.log('Doc id:' + docRef.id);
      }).catch(error =>
        console.log(error))
   }

}
