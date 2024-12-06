export type toDo_task_type = {
    id: number,
    text: string,
    completed: boolean,
    time?: {
        hours: number,
        minutes: number
    }
}