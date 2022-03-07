import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { AccomplishmentComponent } from './Components/accomplishment/accomplishment.component';
import { AssessmentBriefReportComponent } from './Components/assessment-brief-report/assessment-brief-report.component';
import { AssessmentCertificateComponent } from './Components/assessment-certificate/assessment-certificate.component';
import { AssessmentDetailsReportComponent } from './Components/assessment-details-report/assessment-details-report.component';
import { AssessmentsComponent } from './Components/assessments/assessments.component';
import { BasicDetailsComponent } from './Components/basic-details/basic-details.component';
import { BoardLevelExprienceComponent } from './Components/board-level-exprience/board-level-exprience.component';
import { CarStories1Component } from './Components/car-stories1/car-stories1.component';
import { CarStories2Component } from './Components/car-stories2/car-stories2.component';
import { CarStories3Component } from './Components/car-stories3/car-stories3.component';
import { CareerGoalsComponent } from './Components/career-goals/career-goals.component';
import { CertificatesComponent } from './Components/certificates/certificates.component';
import { CompanyDashboardComponent } from './Components/company-dashboard/company-dashboard.component';
import { CompanyFormComponent } from './Components/company-form/company-form.component';
import { CompanyHomepageComponent } from './Components/company-homepage/company-homepage.component';
import { CompanyProfileComponent } from './Components/company-profile/company-profile.component';
import { CompanyComponent } from './Components/company/company.component';
import { ContactDetailsComponent } from './Components/contact-details/contact-details.component';
import { CurrentWorkComponent } from './Components/current-work/current-work.component';
import { ELearningDashboardComponent } from './Components/e-learning-dashboard/e-learning-dashboard.component';
import { ELearningFormComponent } from './Components/e-learning-form/e-learning-form.component';
import { ELearningComponent } from './Components/e-learning/e-learning.component';
import { EduDetailsComponent } from './Components/edu-details/edu-details.component';
import { EmailVarificationComponent } from './Components/email-varification/email-varification.component';
import { ExprienceFormComponent } from './Components/exprience-form/exprience-form.component';
import { FeedComponent } from './Components/feed/feed.component';
import { FormsComponent } from './Components/forms/forms.component';
import { HonorsAwardsComponent } from './Components/honors-awards/honors-awards.component';
import { JosComponent } from './Components/jos/jos.component';
import { LoginComponent } from './Components/login/login.component';
import { MostRecentExprienceComponent } from './Components/most-recent-exprience/most-recent-exprience.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { TimelinePostsComponent } from './Components/timeline-posts/timeline-posts.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { WhereYouAreLocatedComponent } from './Components/where-you-are-located/where-you-are-located.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'timeline',
    component: TimelinePostsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'located', component: WhereYouAreLocatedComponent },
  { path: 'currentWork', component: CurrentWorkComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'carstory1', component: CarStories1Component },
  { path: 'most-recent-exprience', component: MostRecentExprienceComponent },
  { path: 'where-you-are-located', component: WhereYouAreLocatedComponent },
  { path: 'basicdetails', component: BasicDetailsComponent},
  { path: 'accomplishment', component: AccomplishmentComponent},
  { path: 'assessment-brief-report', component: AssessmentBriefReportComponent},
  { path: 'assessment-certificate', component: AssessmentCertificateComponent},
  { path: 'assessment-details-report', component: AssessmentDetailsReportComponent},
  { path: 'assessment', component: AssessmentsComponent},
  { path: 'board-level-experience', component: BoardLevelExprienceComponent},
  { path: 'carstories1', component: CarStories1Component},
  { path: 'carstories2', component: CarStories2Component},
  { path: 'carstories3', component: CarStories3Component},
  { path: 'carrer-goals', component: CareerGoalsComponent},
  { path: 'certificates', component: CertificatesComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'company-dashboard', component: CompanyDashboardComponent},
  { path: 'company-homepage', component: CompanyHomepageComponent},
  { path: 'company-profile', component: CompanyProfileComponent},
  { path: 'contact-details', component: ContactDetailsComponent},
  { path: 'current-work', component:CurrentWorkComponent},
  { path: 'e-learning', component:ELearningComponent},
  { path: 'e-learning-dashboard', component:ELearningDashboardComponent},
  { path: 'e-learning-form', component:ELearningFormComponent},
  { path: 'edu-details', component:EduDetailsComponent},
  { path: 'emailverification', component:EmailVarificationComponent},
  { path: 'experience-form', component:ExprienceFormComponent},
  { path: 'feed', component:FeedComponent},
  { path: 'forms', component:FormsComponent},
  { path: 'honors-awards', component:HonorsAwardsComponent},
  { path: 'jos', component:JosComponent},
  { path: 'company-form', component:CompanyFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
