import { Component, OnInit } from '@angular/core';
import { IProfileImage } from 'src/app/Models/IProfileImage';
import { ImageuploadService } from 'src/app/Services/imageupload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileImage!:IProfileImage[]

  constructor(private imageService:ImageuploadService) { }

  ngOnInit(): void {
    this.imageService.getProfileImage().subscribe( data=>{
      this.profileImage = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IProfileImage
        }
      })
    })
  }

}
