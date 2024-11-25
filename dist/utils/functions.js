import { int_to_dayOfWeek } from "./dicts.js";
import { day_of_week_DOM } from "./dom_vars.js";
function setDayOfWeek(int_weekday) {
    let todays_day_string = int_to_dayOfWeek[int_weekday];
    day_of_week_DOM.textContent = todays_day_string;
}
export { setDayOfWeek };
