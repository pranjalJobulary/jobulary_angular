import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAboutMe } from 'src/app/Models/IAboutme';
import { AboutMeService } from 'src/app/Services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe!: IAboutMe;
  aboutMell!:IAboutMe[];
  example!: string
  constructor(private aboutme: AboutMeService, private route: Router) { }

  ngOnInit(): void {
    this.aboutme.getAboutMe().subscribe(data => {
      this.aboutMell = data.map(e =>{
       return {
         id: e.payload.doc.id,
         ...e.payload.doc.data() as IAboutMe
       }
      })
     })
  }

  addAboutme() {
    this.aboutMe = {
      aboutme: this.example
    }
    this.aboutme.addAboutMe(this.aboutMe).then(() => {
      console.log('Added');
      this.route.navigate(['timeline']);
    }).catch(error => console.log(error));
  }

}
