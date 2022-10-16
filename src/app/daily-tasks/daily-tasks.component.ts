import { Component, OnInit } from '@angular/core';
import { DailyTasksService } from '../daily-tasks.service';
import { Tarefa } from '../shared/Tarefa.model';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css']
})
export class DailyTasksComponent implements OnInit {
  dailyTasks: Tarefa[];
  today: string;

  constructor(private dailyTasksService: DailyTasksService) { }

  ngOnInit(): void {
    this.getToday()
    this.dailyTasks = this.dailyTasksService.getCurrentDay(this.today)
  }

  getToday() {
    const currentDay = new Date().getDay()
    switch (currentDay) {
      case 0:
        this.today = 'domingo'
        break
      case 1:
        this.today = 'segunda'
        break
      case 2: 
        this.today = 'terça'
        break
      case 3:
        this.today = 'quarta'
        break
      case 4:
        this.today = 'quinta'
        break
      case 5:
        this.today = 'sexta'
        break
      case 6:
        this.today = 'sabado'
        break
    }
  }

}
