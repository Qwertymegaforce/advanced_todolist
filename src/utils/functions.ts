import { int_to_dayOfWeek } from "./dicts"
import { day_of_week_DOM } from "./dom_vars"

function setDayOfWeek (int_weekday: keyof typeof int_to_dayOfWeek): void {
    let todays_day_string = int_to_dayOfWeek[int_weekday]
    day_of_week_DOM.textContent = todays_day_string
}

export {setDayOfWeek}