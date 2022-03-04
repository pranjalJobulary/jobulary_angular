import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExperience } from 'src/app/Models/IExperience';
import { AuthService } from 'src/app/Services/auth.service';
import { ExperienceService } from 'src/app/Services/experience.service';

@Component({
  selector: 'app-exprience-form',
  templateUrl: './exprience-form.component.html',
  styleUrls: ['./exprience-form.component.css']
})
export class ExprienceFormComponent implements OnInit {

  experienceVar: IExperience = {
    userId:'',
  company: '',
  employmentType:'',
  location: '',
  start_date: '',
  heading: '',
  industry: '',
  briefDescripition: '',
  verified:null,
  createdON: new Date
  }

  constructor(private auth: AuthService, private route: Router,private experience:ExperienceService) { }

  ngOnInit(): void {
  }

  upload(event:any){
    this.experience.upload(event);
   }
  addExperience() {
    this.experienceVar.userId = this.auth.userId;
    this.experience.addExperience(this.experienceVar).then(() => {
      this.route.navigate(['currentWork']);
    }).catch(error => console.log(error))
  }
}
