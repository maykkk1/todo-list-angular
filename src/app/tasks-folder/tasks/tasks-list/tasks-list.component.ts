import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() taskToEdit = new EventEmitter<Tarefa>();
  @Output() onCreateTask = new EventEmitter<void>();

  tarefas: Tarefa[] = [];

  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tarefas = this.tasksService.getOrderedTasks(this.tasksService.filtro);
    this.filterState = this.tasksService.filtro
  }


  createTask(){
    this.onCreateTask.emit();
  }

  onEditTaskEmiter(task: Tarefa) {
    this.taskToEdit.emit(task)
  }

  changeOrder() {
    this.tarefas = this.tasksService.getOrderedTasks(this.select.nativeElement.value)
  }
}
