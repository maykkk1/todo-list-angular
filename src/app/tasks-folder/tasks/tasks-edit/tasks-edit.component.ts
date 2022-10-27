import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tarefa } from 'src/app/shared/Tarefa.model';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.css']
})
export class TasksEditComponent implements OnInit {
  @Input() selectedTask: Tarefa;
  editMode = false;
  emptyNameError: boolean = false;

  constructor(
      private tasksService: TasksService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {

  }

  onSubmit() {
  }


}
