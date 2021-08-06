import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {

  title: string = "Work Experience";
  company: string = "Great American Insurance Group";
  position: string = "Developer";
  startDate: Date = new Date(2018,7,15);
  endDate: string = "Present";

  constructor() { }

  ngOnInit(): void {
  }

}
