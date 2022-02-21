import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { CurrentWorkComponent } from './Components/current-work/current-work.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { TimelinePostsComponent } from './Components/timeline-posts/timeline-posts.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { WhereYouAreLocatedComponent } from './Components/where-you-are-located/where-you-are-located.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timeline', component: TimelinePostsComponent },
  { path: 'located', component: WhereYouAreLocatedComponent },
  { path: 'currentWork', component: CurrentWorkComponent},
  { path: 'aboutMe', component: AboutMeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
