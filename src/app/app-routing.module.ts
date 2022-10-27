import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTasksComponent } from './completed-tasks-folder/completed-tasks/completed-tasks.component';
import { PlannerComponent } from './daily-tasks/planner/planner.component';
import { HomeComponent } from './home/home.component';
import { TasksEditComponent } from './tasks-folder/tasks/tasks-edit/tasks-edit.component';
import { TasksListComponent } from './tasks-folder/tasks/tasks-list/tasks-list.component';

const appRouts: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: TasksListComponent},
      {path: 'edit', component: TasksEditComponent},
      {path: 'edit/:id', component: TasksEditComponent},
    ]
  }, 
  {
    path: 'tarefas-completas',
    component: CompletedTasksComponent
  },
  {
    path: 'planner',
    component: PlannerComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
