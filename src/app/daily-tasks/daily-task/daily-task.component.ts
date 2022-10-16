import { Component, Input, OnInit } from '@angular/core';
import { DailyTasksService } from 'src/app/daily-tasks.service';
import { Tarefa } from 'src/app/shared/Tarefa.model';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css']
})
export class DailyTaskComponent implements OnInit {
  @Input() taskData: Tarefa;
  @Input() currentDay: string;

  constructor(private dailyTaskService: DailyTasksService) { }

  ngOnInit(): void {
  }

  completeTask() {
    this.dailyTaskService.changeTaskSituation(this.taskData.id, this.currentDay)
  }

}
