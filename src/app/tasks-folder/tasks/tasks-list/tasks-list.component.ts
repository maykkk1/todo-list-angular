import {  Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/shared/Tarefa.model';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  filterState: string;
  @ViewChild('select') select: ElementRef;
  tarefas: Tarefa[] = [];

  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tarefas = this.tasksService.getOrderedTasks(this.tasksService.filtro);
    this.filterState = this.tasksService.filtro
    console.log(this.tarefas)
  }


  onCreateTask(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  changeOrder() {
    this.tarefas = this.tasksService.getOrderedTasks(this.select.nativeElement.value)
  }
}
