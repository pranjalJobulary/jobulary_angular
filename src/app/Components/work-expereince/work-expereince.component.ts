import { Component, OnInit } from '@angular/core';
import { IWorkExperience } from 'src/app/Models/IWorkExpereince';
import { WorkExperienceService } from 'src/app/Services/work-experience.service';

@Component({
  selector: 'app-work-expereince',
  templateUrl: './work-expereince.component.html',
  styleUrls: ['./work-expereince.component.css']
})
export class WorkExpereinceComponent implements OnInit {

  workExp!: IWorkExperience[]

  constructor(private workService: WorkExperienceService) { }

  ngOnInit(): void {
    this.workService.getWork().subscribe(data => {
      this.workExp = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as IWorkExperience
        }
      })
    })
  }

  addWork() {
    this.workService.addWork().then(data => {
      return(
        console.log(data.id)
      )
    }).catch(error => console.log(error));
  }
}
