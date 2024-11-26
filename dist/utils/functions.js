import { int_to_day_of_week_string } from "./dicts.js";
import { day_of_week_DOM } from "./dom_vars.js";
function setDayOfWeek(date) {
    let int_weekday = date.getDay();
    let todays_day_string = int_to_day_of_week_string[int_weekday];
    day_of_week_DOM.textContent = todays_day_string;
}
export { setDayOfWeek };
