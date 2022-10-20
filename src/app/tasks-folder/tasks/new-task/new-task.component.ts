import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Output() leaveThisScreen = new EventEmitter<void>();
  @ViewChild('tarefaNome') taskName: ElementRef;
  @ViewChild('tarefaPrioridade') taskPrioridade: ElementRef;
  emptyNameError: boolean = false;

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateTask() {
    const name = this.taskName.nativeElement.value
    const priority = +this.taskPrioridade.nativeElement.value
   if(name.length === 0) return this.emptyNameError = true;
    this.tasksService.addTarefa(name, priority)
    this.emptyNameError = false
    return this.leaveThisScreen.emit();
  }

  leave() {
    this.leaveThisScreen.emit()
  }

}
