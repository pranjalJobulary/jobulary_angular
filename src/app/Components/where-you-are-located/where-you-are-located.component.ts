import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Router } from '@angular/router';
import { ILocation } from 'src/app/Models/ILocation';
import { AuthService } from 'src/app/Services/auth.service';
import { LocationService } from 'src/app/Services/location.service';

@Component({
  selector: 'app-where-you-are-located',
  templateUrl: './where-you-are-located.component.html',
  styleUrls: ['./where-you-are-located.component.css']
})
export class WhereYouAreLocatedComponent implements OnInit {

  locations!: ILocation[]

  locationVar: ILocation = {
    country: '',
    state: '',
    city: '',
    userId: '',
    createdOn : new Date
  }
  constructor(private locationservice: LocationService, private auth: AuthService, private route: Router,private fun: AngularFireFunctions) { }

  ngOnInit(): void {
    this.locationservice.getLocation().subscribe(data => {
     this.locations = data.map(e =>{
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as ILocation
      }
     })
    })
  }

  addLocation() {
    this.locationVar.userId = this.auth.userId;
    this.locationservice.addLocation(this.locationVar).then(() => {
      this.route.navigate(['currentWork']);
    }).catch(error => console.log(error))
  }


}
