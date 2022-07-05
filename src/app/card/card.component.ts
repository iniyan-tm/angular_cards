import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() title :any
@Input() imageUrl : any
@Input() description:any
@Input() userName : any

  constructor() { }

  ngOnInit(): void {
  }

}
