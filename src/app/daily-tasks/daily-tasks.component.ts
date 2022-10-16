import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css']
})
export class DailyTasksComponent implements OnInit {
  today: string;

  constructor() { }

  ngOnInit(): void {
    this.getToday()
  }

  getToday() {
    const currentDay = new Date().getDay()
    switch (currentDay) {
      case 0:
        this.today = 'Domingo'
        break
      case 1:
        this.today = 'Segunda'
        break
      case 2: 
        this.today = 'Terça'
        break
      case 3:
        this.today = 'Quarta'
        break
      case 4:
        this.today = 'Quinta'
        break
      case 5:
        this.today = 'Sexta'
        break
      case 6:
        this.today = 'Sábado'
        break
    }
  }

}
