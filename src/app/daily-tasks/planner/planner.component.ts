import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DailyTasksService } from 'src/app/daily-tasks.service';
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
  
  constructor(private plannerService: PlannerService, 
              private dailyTasksService: DailyTasksService,
              private router: Router) { }

  ngOnInit(): void {
  }

  changeDay() {
    this.selectedDay = this.currentDay.nativeElement.value;
  }

  addTask() {
    this.plannerService.addTask(this.selectedDay, this.taskName.nativeElement.value)
  }

  save() {
    this.plannerService.saveData()
    this.dailyTasksService.updateData()
    this.router.navigate(['home'])
  }

}
