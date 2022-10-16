import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlannerService } from 'src/app/planner.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  @ViewChild('current') currentDay: ElementRef;
  @ViewChild('taskName') taskName: ElementRef;
  selectedDay: string = 'segunda';
  
  constructor(private plannerService: PlannerService) { }

  ngOnInit(): void {
  }

  changeDay() {
    this.selectedDay = this.currentDay.nativeElement.value;
  }

  addTask() {
    this.plannerService.addTask(this.selectedDay, this.taskName.nativeElement.value)
  }

}
