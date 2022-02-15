import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWorkExperience } from 'src/app/Models/IWorkExpereince';
import { WorkExperienceService } from 'src/app/Services/work-experience.service';

@Component({
  selector: 'app-current-work',
  templateUrl: './current-work.component.html',
  styleUrls: ['./current-work.component.css']
})
export class CurrentWorkComponent implements OnInit {

  currentWork: IWorkExperience = {
    company: '',
    designation: '',
    description: '',
    start_date: '',
    end_date: '',
    currentlyWorking: true,
    verified: false,
    verifiedBy:''
  }

  constructor(private workService: WorkExperienceService, private route: Router) { }

  ngOnInit(): void {
  }

  addCurrentWork() {
    this.workService.addWork(this.currentWork).then(() => {
      this.route.navigate(['aboutMe']);
    }).catch(error => console.log(error));
  }

}
