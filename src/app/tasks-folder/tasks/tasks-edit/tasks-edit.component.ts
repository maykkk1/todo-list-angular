import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  taskForm: FormGroup;
  taskData: Tarefa;
  editMode = false;

  constructor(
      private tasksService: TasksService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    if(id) {
      this.taskData = this.tasksService.getTaskById(+id)
      this.editMode = true
      this.taskForm = new FormGroup({
        'name': new FormControl(this.taskData.name, Validators.required),
        'priority': new FormControl(this.taskData.priority, Validators.required)
      })
    } else {
      this.taskForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'priority': new FormControl(0, Validators.required)
      })
    }
  }

  onSubmit() {
    const name = this.taskForm.get('name')?.value
    const priority = this.taskForm.get('priority')?.value
    if(this.editMode) {
      this.tasksService.editTaskBy(this.taskData.id, name, priority)
    } else {
      this.tasksService.addTarefa(name, priority)
    }
    this.router.navigate(['home'])
  }

  onCancel() {
    this.router.navigate(['home'])
  }


}
