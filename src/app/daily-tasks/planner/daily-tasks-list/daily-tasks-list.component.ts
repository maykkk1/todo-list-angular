import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlannerService } from 'src/app/planner.service';
import { Tarefa } from 'src/app/shared/Tarefa.model';

@Component({
  selector: 'app-daily-tasks-list',
  templateUrl: './daily-tasks-list.component.html',
  styleUrls: ['./daily-tasks-list.component.css']
})
export class DailyTasksListComponent implements OnInit, OnChanges {
  @Input() selectedDay: string;
  currentDayTasks: Tarefa[];

  constructor(private plannerService: PlannerService) { }

  ngOnInit(): void {
    this.currentDayTasks = this.plannerService.getCurrentDay(this.selectedDay)
  }

  ngOnChanges() {
    this.currentDayTasks = this.plannerService.getCurrentDay(this.selectedDay)
  }

}
