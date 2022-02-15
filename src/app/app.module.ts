import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule  } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { TimelinePostsComponent } from './Components/timeline-posts/timeline-posts.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { WorkExpereinceComponent } from './Components/work-expereince/work-expereince.component';
import { EduDetailsComponent } from './Components/edu-details/edu-details.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { WhereYouAreLocatedComponent } from './Components/where-you-are-located/where-you-are-located.component';
import { WhereYouAreLocated2Component } from './Components/where-you-are-located2/where-you-are-located2.component';
import { ContactDetailsComponent } from './Components/contact-details/contact-details.component';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';
import { CarStories1Component } from './Components/car-stories1/car-stories1.component';
import { CarStories2Component } from './Components/car-stories2/car-stories2.component';
import { CarStories3Component } from './Components/car-stories3/car-stories3.component';
import { AccomplishmentComponent } from './Components/accomplishment/accomplishment.component';
import { BoardLevelExprienceComponent } from './Components/board-level-exprience/board-level-exprience.component';
import { ProfessionalMembershipComponent } from './Components/professional-membership/professional-membership.component';
import { PatentsComponent } from './Components/patents/patents.component';
import { PublicationAndPresentationComponent } from './Components/publication-and-presentation/publication-and-presentation.component';
import { TrainingComponent } from './Components/training/training.component';
import { ELearningComponent } from './Components/e-learning/e-learning.component';
import { SkillDevelopmentComponent } from './Components/skill-development/skill-development.component';
import { CertificatesComponent } from './Components/certificates/certificates.component';
import { LicensesComponent } from './Components/licenses/licenses.component';
import { VolunteeringComponent } from './Components/volunteering/volunteering.component';
import { HonorsAwardsComponent } from './Components/honors-awards/honors-awards.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { CareerGoalsComponent } from './Components/career-goals/career-goals.component';
import { AssessmentsComponent } from './Components/assessments/assessments.component';
import { FeedComponent } from './Components/feed/feed.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AssessmentQuestionsComponent } from './Components/assessment-questions/assessment-questions.component';
import { AssessmentBriefReportComponent } from './Components/assessment-brief-report/assessment-brief-report.component';
import { AssessmentDetailsReportComponent } from './Components/assessment-details-report/assessment-details-report.component';
import { AssessmentCertificateComponent } from './Components/assessment-certificate/assessment-certificate.component';
import { ProfileComponent } from './Components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinePostsComponent,
    WorkExpereinceComponent,
    EduDetailsComponent,
    AboutMeComponent,
    RegistrationComponent,
    LoginComponent,
    WhereYouAreLocatedComponent,
    WhereYouAreLocated2Component,
    ContactDetailsComponent,
    PersonalDetailsComponent,
    CarStories1Component,
    CarStories2Component,
    CarStories3Component,
    AccomplishmentComponent,
    BoardLevelExprienceComponent,
    ProfessionalMembershipComponent,
    PatentsComponent,
    PublicationAndPresentationComponent,
    TrainingComponent,
    ELearningComponent,
    SkillDevelopmentComponent,
    CertificatesComponent,
    LicensesComponent,
    VolunteeringComponent,
    HonorsAwardsComponent,
    SkillsComponent,
    CareerGoalsComponent,
    AssessmentsComponent,
    FeedComponent,
    UserProfileComponent,
    AssessmentQuestionsComponent,
    AssessmentBriefReportComponent,
    AssessmentDetailsReportComponent,
    AssessmentCertificateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
