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
  @Output() taskToEdit = new EventEmitter<Tarefa>();
  @Input() tarefaData: Tarefa;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  onDeleteTask() {
    this.tasksService.deleteTask(this.tarefaData.id)
  }

  onEditTask() {
    this.taskToEdit.emit(this.tarefaData)
  }

  OnCompleteTask() {
    this.tasksService.completeTask(this.tarefaData.id);
  }

}
