import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/shared/Tarefa.model';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.css']
})
export class TasksEditComponent implements OnInit {
  selectedTask: Tarefa;
  @ViewChild('tarefaNomeEdit') inputName: ElementRef;
  @ViewChild('tarefaPrioridade') selectPriority: ElementRef;
  emptyNameError: boolean = false;

  constructor(private tasksService: TasksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.params['id'])
    this.selectedTask = this.tasksService.getTaskById(id)
    this.route.params
      .subscribe(params =>{
        id = parseInt(params['id'])
        this.selectedTask = this.tasksService.getTaskById(id)
      })
  }

  onEditTask() {
    const newName = this.inputName.nativeElement.value;
    const newPriority = this.selectPriority.nativeElement.value;
    if(newName.length === 0) return this.emptyNameError = true;
    this.tasksService.editTaskBy(this.selectedTask.id, newName, newPriority)
    return this.router.navigate(['tarefas'])
  }

}
