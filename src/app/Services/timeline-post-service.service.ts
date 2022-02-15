import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { ITimeline } from '../Models/ITimeline';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TimelinePostServiceService {

  timelinePostsCollection!: AngularFirestoreCollection<ITimeline>;
  timelinePosts!: Observable<ITimeline[]>
  id!: string;

  constructor(private firestore: AngularFirestore, private authAngular: AngularFireAuth,private auth:AuthService) {  }

  getTimelinePost() {
    return this.firestore.collection("TimeLinePosts").snapshotChanges();
  }

  getUserExperience() {
    return this.firestore.collection("users").doc(this.id).collection('newJob').snapshotChanges();
  }

  getUserBasicDetails() {
    return this.firestore.collection("users").doc(this.id).collection('basicDetail').snapshotChanges();
  }

  createPost(post: ITimeline){
    return this.firestore.collection('TimeLinePosts').add(post);
  }

  getUserDetails() {
    return this.firestore.collection("users").snapshotChanges();
  }

  addTimeLinePost(timelinePosts:ITimeline){
   return this.firestore.collection('users').doc(this.auth.userId).collection('TimeLinePosts').add(timelinePosts).then(data=>{
    console.log("Success" + data.id)
  }).catch(error => console.log(error));
  }
}
