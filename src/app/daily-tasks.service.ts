import { Tarefa } from "./shared/Tarefa.model";

export class DailyTasksService {
    segunda: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[0];
    terca: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[1];
    quarta: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[2];
    quinta: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[3];
    sexta: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[4];
    sabado: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[5];
    domingo: Tarefa[] = JSON.parse(localStorage.getItem('dailyTasks')!)[6];


    updateData() {
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
}