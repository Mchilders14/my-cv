import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CvComponent implements OnInit {

  name: string = "Matthew Childers";
  address: string = "3448 Jane Avenue Cincinnati OH, 45211";
  phone: string = "513-555-5555";
  email: string = "mchilders@test.com";

  constructor(){ }

  ngOnInit(): void {
  }

}
