import { Tarefa } from "./shared/Tarefa.model";

export class TasksService {
    public currentIdCounter: number = 3;
    private tarefas: Tarefa[] =  []

    private tarefasCompletas: Tarefa[] = []

    initLocalstorageData() {
        if(localStorage.getItem('tasks') === null) {
            localStorage.setItem('tasks', '[]')
            localStorage.setItem('completeTasks', '[]')
        } else {
            this.tarefas = JSON.parse(localStorage.getItem('tasks')!)
            this.tarefasCompletas = JSON.parse(localStorage.getItem('completeTasks')!)
        }
    }

    getTarefas() {
        return this.tarefas;
    }

    getTarefasCompletas() {
        return this.tarefasCompletas
    }

    addTarefa(name: string, priority: string) {
        this.currentIdCounter += 1
        const newTask = new Tarefa(this.currentIdCounter, name, priority)
        this.tarefas.push(newTask)
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

    editTaskBy(id: number, newName: string, newPriority: 'string') {
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
    }

}