import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { CurrentWorkComponent } from './Components/current-work/current-work.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { TimelinePostsComponent } from './Components/timeline-posts/timeline-posts.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { WhereYouAreLocatedComponent } from './Components/where-you-are-located/where-you-are-located.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timeline', component: TimelinePostsComponent,canActivate: [AuthGuard]},
  { path: 'located', component: WhereYouAreLocatedComponent },
  { path: 'currentWork', component: CurrentWorkComponent},
  { path: 'aboutMe', component: AboutMeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
