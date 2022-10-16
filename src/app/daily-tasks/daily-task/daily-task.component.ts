import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/Tarefa.model';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css']
})
export class DailyTaskComponent implements OnInit {
  @Input() taskData: Tarefa;

  constructor() { }

  ngOnInit(): void {
  }

}
