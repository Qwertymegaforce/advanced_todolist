import { int_to_day_of_week } from "./dicts.js"
import { day_of_week_DOM } from "./dom_vars.js"

function setDayOfWeek (int_weekday: keyof typeof int_to_day_of_week): void {
    let todays_day_string = int_to_day_of_week[int_weekday]
    day_of_week_DOM.textContent = todays_day_string
}

export {setDayOfWeek}