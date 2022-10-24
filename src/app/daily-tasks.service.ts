import { Tarefa } from "./shared/Tarefa.model";

export class DailyTasksService {
    segunda: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[0];
    terca: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[1];
    quarta: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[2];
    quinta: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[3];
    sexta: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[4];
    sabado: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[5];
    domingo: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[6];


    getData() {
        const tasksList = JSON.parse(localStorage.getItem('dailyTasks')!)
        this.segunda = tasksList[0]
        this.terca = tasksList[1]
        this.quarta = tasksList[2]
        this.quinta = tasksList[3]
        this.sexta = tasksList[4]
        this.sabado = tasksList[5]
        this.domingo = tasksList[6]
    }

    getCurrentDay(currentDay: string) {
        switch(currentDay) {
            case 'segunda':
                return this.segunda
            case 'domingo':
                return this.domingo
            case 'quarta':
                return this.quarta
            case 'quinta':
                return this.quinta
            case 'sexta':
                return this.sexta
            case 'sabado':
                return this.sabado
            default:
                return this.terca
        }
    }

    updateData() {
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

    changeTaskSituation(id: number, day: string) {
        const today = this.getCurrentDay(day)
        const index = today.findIndex(task => task.id === id)
        today[index].isComplete
        ? today[index].isComplete = false
        : today[index].isComplete = true
        this.updateData()
    }

    deleteTask(id: number, day: string) {
        const today = this.getCurrentDay(day)
        const index = today.findIndex(task => task.id === id)
        today.splice(index, 1)
        this.updateData()
    }

}