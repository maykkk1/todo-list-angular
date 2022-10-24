import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DailyTasksService } from 'src/app/daily-tasks.service';
import { Tarefa } from 'src/app/shared/Tarefa.model';

@Component({
  selector: 'app-planner-edit',
  templateUrl: './planner-edit.component.html',
  styleUrls: ['./planner-edit.component.css']
})
export class PlannerEditComponent implements OnInit {
  selectedDay: Tarefa[];
  @ViewChild('currentDay') currentDay: ElementRef;

  constructor(private dailyTasksService: DailyTasksService) { }

  ngOnInit(): void {
    this.selectedDay = this.dailyTasksService.getCurrentDay('segunda')
  }

  changeDay() {
    this.selectedDay = this.dailyTasksService.getCurrentDay(this.currentDay.nativeElement.value)
  }

}
