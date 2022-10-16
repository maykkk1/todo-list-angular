import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTasksComponent } from './completed-tasks-folder/completed-tasks/completed-tasks.component';
import { PlannerComponent } from './daily-tasks/planner/planner.component';
import { HomeComponent } from './home/home.component';

const appRouts: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: []
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
