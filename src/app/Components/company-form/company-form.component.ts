import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployer } from 'src/app/Models/IEmployer';
import { AuthService } from 'src/app/Services/auth.service';
import { EmployerService } from 'src/app/Services/employer.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
   employerVar:IEmployer ={
     userId: '',
     companyname: '',
     companytype: '',
     companysummary: '',
     companydescription: '',
     companywebsite: '',
     companysize: '',
     headquaters: '',
     companyfounded: '',
     createOn: new Date,
     profileImage: '',
     backGroundImage: '',
     companyEmail: '',
     verified: null
   }
  constructor(private auth: AuthService, private route: Router,private employerService:EmployerService) { }


  upload1(event:any){
    this.employerService.upload1(event);
   }
   upload2(event:any){
    this.employerService.upload2(event);
   }
  ngOnInit(): void {
  }

  addEmployer() {
    this.employerVar.userId = this.auth.userId;
    this.employerService.addEmployer(this.employerVar).then(() => {
      this.route.navigate(['company-homepage']);
    }).catch(error => console.log(error))
  }

}
