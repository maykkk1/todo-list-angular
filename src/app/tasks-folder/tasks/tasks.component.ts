import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/Tarefa.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskToEditData: Tarefa;
  isTasksListVisible = true;
  isNewTasksVisible = false;
  isEditTaskVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNewTaskScreen() {
    this.isTasksListVisible = false;
    this.isNewTasksVisible = true;
  }

  hiddeNewTaskScreen() {
    this.isNewTasksVisible = false;
    this.isTasksListVisible = true;
  }

  taskToEdit(task: Tarefa) {
    this.taskToEditData = task;
    this.isTasksListVisible = false;
    this.isEditTaskVisible = true;
  }

  hiddeEditTaskScreen() {
    this.isEditTaskVisible = false;
    this.isTasksListVisible = true;
  }

}
