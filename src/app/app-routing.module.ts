import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTasksComponent } from './completed-tasks-folder/completed-tasks/completed-tasks.component';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './tasks-folder/tasks/new-task/new-task.component';
import { TasksEditComponent } from './tasks-folder/tasks/tasks-edit/tasks-edit.component';
import { TasksComponent } from './tasks-folder/tasks/tasks.component';

const appRouts: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  }, 
  {
    path: 'tarefas-completas',
    component: CompletedTasksComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
