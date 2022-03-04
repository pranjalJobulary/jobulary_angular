import { Component, OnInit } from '@angular/core';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { BasicdetailsService } from 'src/app/Services/basicdetails.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  basicdetails!:IBasicDetails[]

  constructor( private basicdetailsService:BasicdetailsService) { }

  ngOnInit(): void {
    this.basicdetailsService.getBasicDetails().subscribe( data=>{
      this.basicdetails = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IBasicDetails
        }
      })
      console.log(data)
    })
  }

}
