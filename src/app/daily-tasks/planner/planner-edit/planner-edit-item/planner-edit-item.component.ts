import { Component, Input, OnInit } from '@angular/core';
import { DailyTasksService } from 'src/app/daily-tasks.service';
import { Tarefa } from 'src/app/shared/Tarefa.model';

@Component({
  selector: 'app-planner-edit-item',
  templateUrl: './planner-edit-item.component.html',
  styleUrls: ['./planner-edit-item.component.css']
})
export class PlannerEditItemComponent implements OnInit {
  @Input() taskData: Tarefa;
  @Input() taskDay: string;

  constructor(private dailyTasksService: DailyTasksService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.dailyTasksService.deleteTask(this.taskData.id, this.taskDay)
  }

}
