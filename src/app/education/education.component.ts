import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  title: string = "Education";
  school: string = "University of Cincinnati";
  degree: string = "A.S. Computer Science";
  endDate: Date = new Date(2018, 5, 27);

  constructor() { }

  ngOnInit(): void {
  }

}
