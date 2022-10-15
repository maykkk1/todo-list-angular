import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TasksComponent } from './tasks-folder/tasks/tasks.component';
import { CompletedTasksComponent } from './completed-tasks-folder/completed-tasks/completed-tasks.component';
import { HeaderComponent } from './header/header.component';
import { TasksEditComponent } from './tasks-folder/tasks/tasks-edit/tasks-edit.component';
import { NewTaskComponent } from './tasks-folder/tasks/new-task/new-task.component';
import { TasksListComponent } from './tasks-folder/tasks/tasks-list/tasks-list.component';
import { TasksListItemComponent } from './tasks-folder/tasks/tasks-list-item/tasks-list-item.component';
import { TasksService } from './tasks.service';
import { HomeComponent } from './home/home.component';



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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TasksService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
