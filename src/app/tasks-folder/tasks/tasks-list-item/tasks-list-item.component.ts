import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/shared/Tarefa.model';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.css']
})
export class TasksListItemComponent implements OnInit {
  @Input() tarefaData: Tarefa;

  constructor(
            private tasksService: TasksService,
            private router: Router,
            private route: ActivatedRoute
            ) { }

  ngOnInit(): void {
  }

  onDeleteTask() {
    this.tasksService.deleteTask(this.tarefaData.id)
  }

  onEditTask() {
    this.router.navigate(['edit', this.tarefaData.id], {relativeTo: this.route})
  }

  OnCompleteTask() {
    this.tasksService.completeTask(this.tarefaData.id);
  }

}
