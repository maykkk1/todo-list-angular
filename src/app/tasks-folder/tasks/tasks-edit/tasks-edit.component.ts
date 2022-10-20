import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() leaveThisScreen = new EventEmitter<void>();
  @ViewChild('tarefaNomeEdit') inputName: ElementRef;
  @ViewChild('tarefaPrioridade') selectPriority: ElementRef;
  emptyNameError: boolean = false;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

  }

  onEditTask() {
    const newName = this.inputName.nativeElement.value;
    const newPriority = this.selectPriority.nativeElement.value;
    if(newName.length === 0) return this.emptyNameError = true;
    this.tasksService.editTaskBy(this.selectedTask.id, newName, newPriority)
    return this.leave()
  }

  leave() {
    this.leaveThisScreen.emit()
  }

}
