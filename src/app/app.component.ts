import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
  {title:"Trees",imageUrl:"assets/tree.jpeg",userName:"baniyan",description:"THis is a 1000 year old tree"},
  {title:"Mountain",imageUrl:"assets/mountain.jpeg",userName:"everest",description:"This is a largest mountain on earth"},
  {title:"Biking",imageUrl:"assets/biking.jpeg",userName:"xpluse",description:"THis is a Hero XPLUSE mountain bike"},
 ]
}
