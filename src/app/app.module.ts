import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule  } from '@angular/forms';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { TimelinePostsComponent } from './Components/timeline-posts/timeline-posts.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { WorkExpereinceComponent } from './Components/work-expereince/work-expereince.component';
import { EduDetailsComponent } from './Components/edu-details/edu-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinePostsComponent,
    WorkExpereinceComponent,
    EduDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
