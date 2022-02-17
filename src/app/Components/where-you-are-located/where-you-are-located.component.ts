import { Component, OnInit } from '@angular/core';
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

  locationVar: ILocation = {
    country: '',
    state: '',
    city: '',
    userId: '',
    createdOn : new Date
  }
  constructor(private location: LocationService, private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  addLocation() {
    this.locationVar.userId = this.auth.userId;
    this.location.addLocation(this.locationVar).then(() => {
      this.route.navigate(['currentWork']);
    }).catch(error => console.log(error))
  }
}
