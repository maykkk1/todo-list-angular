import { Tarefa } from "./shared/Tarefa.model";

export class PlannerService {
    public currentIdCounter: number = 0;
    segunda: Tarefa[] = [];
    terca: Tarefa[] = [];
    quarta: Tarefa[] = [];
    quinta: Tarefa[] = [];
    sexta: Tarefa[] = [];
    sabado: Tarefa[] = [];
    domingo: Tarefa[] = [];

    getCurrentDay(currentDay: string) {
        switch(currentDay) {
            case 'segunda':
                return this.segunda
            case 'terca':
                return this.terca
            case 'quarta':
                return this.quarta
            case 'quinta':
                return this.quinta
            case 'sexta':
                return this.sexta
            case 'sabado':
                return this.sabado
            default:
                return this.domingo
        }
    }

    addTask(day: string, name: string) {
        const task = new Tarefa(this.currentIdCounter, name, 'sem')
        this.currentIdCounter++
        const currentDay = this.getCurrentDay(day)
        currentDay.push(task)
    }

    deleteTask(id: number, day: string) {
        const currentDayTaskList = this.getCurrentDay(day)
        const index = currentDayTaskList.findIndex(task => task.id === id)
        currentDayTaskList.splice(index, 1)
    }

    saveData() {
        const week = [];
        week.push(this.segunda)
        week.push(this.terca)
        week.push(this.quarta)
        week.push(this.quinta)
        week.push(this.sexta)
        week.push(this.sabado)
        week.push(this.domingo)
        localStorage.setItem('dailyTasks', JSON.stringify(week))
    }
}