import { Subject } from "rxjs";
import { Tarefa } from "./shared/Tarefa.model";

export class TasksService {
    public filtro: string = 'maisNova';
    public currentIdCounter: number[] = [];
    private tarefas: Tarefa[] =  []

    private tarefasCompletas: Tarefa[] = []

    initLocalstorageData() {
        if(localStorage.getItem('tasks') === null) {
            localStorage.setItem('tasks', '[]')
            localStorage.setItem('completeTasks', '[]')
            localStorage.setItem('tasksIdCont', '[]')
            localStorage.setItem('dailyTasks', '[]')
        } else {
            this.tarefas = JSON.parse(localStorage.getItem('tasks')!)
            this.tarefasCompletas = JSON.parse(localStorage.getItem('completeTasks')!)
            this.currentIdCounter = JSON.parse(localStorage.getItem('tasksIdCont')!)
        }
    }

    getOrderedTasks(type: string) {
        this.filtro = type
        if(type == 'maisNova') {
            return this.tarefas.sort((a, b) => b.id > a.id ? 1 :(a.id > b.id)? -1: 0)
        }
        else if (type === 'maisAntiga') {
            return this.tarefas.sort((a, b) => a.id > b.id ? 1 :(b.id > a.id)? -1: 0)
        } else if (type === 'menorPrioridade') {
            return this.tarefas.sort((a, b) => a.priority > b.priority ? 1 :(b.priority > a.priority)? -1: 0)
        } else if (type === 'maiorPrioridade') {
            return this.tarefas.sort((a, b) => b.priority > a.priority ? 1 :(a.priority > b.priority)? -1: 0)
        }
        return this.tarefas
    }

    getTarefasCompletas() {
        return this.tarefasCompletas
    }

    addTarefa(name: string, priority: number) {
        const newTask = new Tarefa(this.currentIdCounter.length, name, priority)
        this.tarefas.push(newTask)
        this.currentIdCounter.push(0)
        this.updateLocalstorage()
    }

    deleteTask(id: number) {
        const index = this.tarefas.findIndex(task => task.id === id)
        this.tarefas.splice(index, 1)
        this.updateLocalstorage()
    }

    getTaskById(id: number) {
        const index = this.tarefas.findIndex(task => task.id === id)
        return this.tarefas[index]
    }

    editTaskBy(id: number, newName: string, newPriority: number) {
        const task = this.getTaskById(id)
        task.name = newName
        task.priority = newPriority
        this.updateLocalstorage()
    }

    completeTask(id: number) {
        const task = this.getTaskById(id);
        task.isComplete = true;
        this.tarefasCompletas.push(task)
        this.deleteTask(id)
        this.updateLocalstorage()
    }

    updateLocalstorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tarefas))
        localStorage.setItem('completeTasks', JSON.stringify(this.tarefasCompletas))
        localStorage.setItem('tasksIdCont', JSON.stringify(this.currentIdCounter))
    }

}