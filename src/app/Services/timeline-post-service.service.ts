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
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('newJob').snapshotChanges();
  }

  getUserBasicDetails() {
    return this.firestore.collection("users").doc('OObdeBoIdodZLcQtPk0E52qm4aj1').collection('basicDetail').snapshotChanges();
  }

  createPost(post: ITimeline){
    return this.firestore.collection('TimeLinePosts').add(post);
  }

  getUserDetails() {
    return this.firestore.collection("users").snapshotChanges();
  }

  signIn(email: string, password: string){
    this.authAngular.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.id = value.user?.uid ?? "Not available";
      console.log("Nice it worked!");
      console.log('Sucess', value.user?.uid),
      console.log("value.additionalUserInfo?.providerId");
      console.log(this.id);
      this.getUserDetails();
    }).catch(error => {
      console.log(error);
    })
  }
}
