export class Tarefa {
    public id: number;
    public name: string;
    public priority: string;
    public isComplete: boolean = false;

    constructor(id: number, name: string, priority: string) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
}