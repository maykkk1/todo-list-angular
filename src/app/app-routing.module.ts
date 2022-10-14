import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTasksComponent } from './completed-tasks-folder/completed-tasks/completed-tasks.component';
import { NewTaskComponent } from './tasks-folder/tasks/new-task/new-task.component';
import { TasksEditComponent } from './tasks-folder/tasks/tasks-edit/tasks-edit.component';
import { TasksComponent } from './tasks-folder/tasks/tasks.component';

const appRouts: Routes = [
  {
    path: 'tarefas',
     component: TasksComponent,
     children: [
      {
        path: 'nova-tarefa',
        component: NewTaskComponent
      },
      {
        path: 'editar-tarefa/:id',
        component: TasksEditComponent
      }
     ]
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
