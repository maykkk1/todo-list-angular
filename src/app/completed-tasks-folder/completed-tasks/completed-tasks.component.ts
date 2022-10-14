import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/Tarefa.model';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  tarefasCompletas: Tarefa[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tarefasCompletas = this.tasksService.getTarefasCompletas();
  }

}
