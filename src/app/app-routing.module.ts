import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { TimelinePostsComponent } from './Components/timeline-posts/timeline-posts.component';
import { WhereYouAreLocatedComponent } from './Components/where-you-are-located/where-you-are-located.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timeline', component: TimelinePostsComponent },
  { path: 'located', component: WhereYouAreLocatedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
