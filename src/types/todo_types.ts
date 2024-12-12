export type toDo_time_type = {
    hours: number,
    minutes: number 
}


export type toDo_task_type = {
    id: number,
    text: string,
    completed: boolean,
    time?: toDo_time_type | string
}