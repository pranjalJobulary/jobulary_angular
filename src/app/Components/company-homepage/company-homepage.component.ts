import { Component, OnInit } from '@angular/core';
import { IEmployer } from 'src/app/Models/IEmployer';
import { EmployerService } from 'src/app/Services/employer.service';

@Component({
  selector: 'app-company-homepage',
  templateUrl: './company-homepage.component.html',
  styleUrls: ['./company-homepage.component.css']
})
export class CompanyHomepageComponent implements OnInit {
 employer!: IEmployer[];
  constructor(private employerService:EmployerService) { }

  ngOnInit(): void {
    this.employerService.getspecificEmployer().subscribe(data => {
      this.employer = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as IEmployer
        }
      }
      )
    })
  }

}
