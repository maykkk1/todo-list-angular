import { Component, Input, OnInit } from '@angular/core';
import { PlannerService } from 'src/app/planner.service';
import { Tarefa } from 'src/app/shared/Tarefa.model';

@Component({
  selector: 'app-daily-tasks-list-item',
  templateUrl: './daily-tasks-list-item.component.html',
  styleUrls: ['./daily-tasks-list-item.component.css']
})
export class DailyTasksListItemComponent implements OnInit {
  @Input() taskData: Tarefa;
  @Input() selectedDay: string;

  constructor(private plannerService: PlannerService) { }

  ngOnInit(): void {
  }

  delete() {
    this.plannerService.deleteTask(this.taskData.id, this.selectedDay)
  }

}
