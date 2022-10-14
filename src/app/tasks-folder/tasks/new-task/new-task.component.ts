import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @ViewChild('tarefaNome') taskName: ElementRef;
  @ViewChild('tarefaPrioridade') taskPrioridade: ElementRef;
  
  emptyNameError: boolean = false;

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateTask() {
    const name = this.taskName.nativeElement.value
    const priority = this.taskPrioridade.nativeElement.value
   if(name.length === 0) return this.emptyNameError = true;
    this.tasksService.addTarefa(name, priority)
    this.emptyNameError = false
    return this.router.navigate(['tarefas']);
  }

}
