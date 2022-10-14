import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks-folder/tasks/tasks.component';
import { CompletedTasksComponent } from './completed-tasks-folder/completed-tasks/completed-tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TasksEditComponent } from './tasks-folder/tasks/tasks-edit/tasks-edit.component';
import { NewTaskComponent } from './tasks-folder/tasks/new-task/new-task.component';
import { TasksListComponent } from './tasks-folder/tasks/tasks-list/tasks-list.component';
import { TasksListItemComponent } from './tasks-folder/tasks/tasks-list-item/tasks-list-item.component';
import { TasksService } from './tasks.service';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CompletedTasksComponent,
    HeaderComponent,
    TasksEditComponent,
    NewTaskComponent,
    TasksListComponent,
    TasksListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
