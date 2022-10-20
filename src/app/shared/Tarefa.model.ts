export class Tarefa {
    public id: number;
    public name: string;
    public priority: number;
    public isComplete: boolean = false;

    constructor(id: number, name: string, priority: number) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
}