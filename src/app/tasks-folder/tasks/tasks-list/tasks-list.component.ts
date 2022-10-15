import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/shared/Tarefa.model';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Output() taskToEdit = new EventEmitter<Tarefa>();
  @Output() onCreateTask = new EventEmitter<void>();

  tarefas: Tarefa[] = [];

  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tarefas = this.tasksService.getTarefas();
  }

  createTask(){
    this.onCreateTask.emit();
  }

  onEditTaskEmiter(task: Tarefa) {
    this.taskToEdit.emit(task)
  }
}
