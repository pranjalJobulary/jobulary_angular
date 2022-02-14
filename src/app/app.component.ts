import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobulary-prod';

  constructor(private route: Router) {}

  ngOnInit(): void{
    this.route.navigate(['login']);
  }
}
