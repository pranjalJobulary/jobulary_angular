import { Component, OnInit } from '@angular/core';
import { fromDocRef } from '@angular/fire/compat/firestore';
import {identity, Observable} from 'rxjs';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { INewjob } from 'src/app/Models/INewJob';
import { ITimeline } from 'src/app/Models/ITimeline';
import { IUserDetails } from 'src/app/Models/IUserDetails';
import { TimelinePostServiceService } from 'src/app/Services/timeline-post-service.service';

@Component({
  selector: 'app-timeline-posts',
  templateUrl: './timeline-posts.component.html',
  styleUrls: ['./timeline-posts.component.css']
})
export class TimelinePostsComponent implements OnInit {

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

  constructor(private timeline: TimelinePostServiceService) { }

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


   addPost (post: string) {
debugger
    this.myDate = new Date();

     this.posts = {
       createdOn: this.myDate,
       documentId: '',
       documentLocation: '',
       documentUrl: '',
       imageLocation: '',
       imageUrl: '',
       postContent: post ,
       profileImage: 'https://firebasestorage.googleapis.com/v0/b/jobulary.appspot.com/o/kumar%40jobulary.io1643020057633?alt=media&token=6475b5ea-4cf9-4165-bb13-ca48cbc98f22',
       userId: 'OObdeBoIdodZLcQtPk0E52qm4aj1',
       userName: 'Kumaresan',
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

   async signIn () {
    this.email = 'pranjal@jobulary.io';
    this.password = 'Pranjal@1';
    // this.timeline.signIn(this.email, this.password);
   }
  // getTimelinePosts(): Observable<any>{
  //     this.timeline.getTimelinePost().subscribe(res => (this.timelinePosts = res));
  //     console.log(this.timelinePosts);
  //     return this.timelinePosts;
  //   }
  

}
