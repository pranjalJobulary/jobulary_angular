import { Component, OnInit } from '@angular/core';
import { ILocation } from 'src/app/Models/ILocation';
import { AuthService } from 'src/app/Services/auth.service';
import { LocationService } from 'src/app/Services/location.service';

@Component({
  selector: 'app-where-you-are-located',
  templateUrl: './where-you-are-located.component.html',
  styleUrls: ['./where-you-are-located.component.css']
})
export class WhereYouAreLocatedComponent implements OnInit {

  locationVar: ILocation = {
    documentId: '',
    country: '',
    state: '',
    city: '',
    userId: '',
    createdOn : new Date
  }
  constructor(private location: LocationService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  addLocation() {
    this.locationVar.userId = this.auth.userId;
    this.location.addLocation(this.locationVar)
  }
}
