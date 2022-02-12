import { Component, OnInit } from '@angular/core';
import { IAboutMe } from 'src/app/Models/IAboutme';
import { AboutMeService } from 'src/app/Services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe!: IAboutMe;

  example!: string
  constructor(private aboutme: AboutMeService) { }

  ngOnInit(): void {
  }

  addAboutme() {
    this.aboutMe = {
      aboutme: this.example
    }
    debugger
    this.aboutme.addAboutMe(this.aboutMe).then(() => {
      console.log('Added');
    }).catch(error => console.log(error));
  }

}
