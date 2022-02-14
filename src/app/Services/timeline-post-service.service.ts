import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { ITimeline } from '../Models/ITimeline';


@Injectable({
  providedIn: 'root'
})
export class TimelinePostServiceService {

  timelinePostsCollection!: AngularFirestoreCollection<ITimeline>;
  timelinePosts!: Observable<ITimeline[]>
  id!: string;

  constructor(private firestore: AngularFirestore, private authAngular: AngularFireAuth) {  }

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
}
