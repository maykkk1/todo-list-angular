import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Planejador';
  constructor(private route: Router, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.initLocalstorageData()
  }
}
