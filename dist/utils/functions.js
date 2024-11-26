import { int_to_day_of_week_string, int_to_month_string } from "./dicts.js";
import { day_of_week_DOM, date_DOM } from "./dom_vars.js";
export function setDayOfWeek(date) {
    let int_weekday = date.getDay();
    let todays_day_string = int_to_day_of_week_string[int_weekday];
    day_of_week_DOM.textContent = todays_day_string + ",";
}
export function setDate(date) {
    let int_month = date.getMonth();
    let int_date = date.getDate();
    let current_mont_string = int_to_month_string[int_month];
    let numeral_ending = determineNumeralEnding(int_date);
    let resulted_string = `${current_mont_string} ${int_date}${numeral_ending}`;
    date_DOM.textContent = resulted_string;
}
function determineNumeralEnding(number_to_determine) {
    if (number_to_determine == 1)
        return "st";
    else if (number_to_determine == 2)
        return "nd";
    else if (number_to_determine == 3)
        return "rd";
    else
        return "th";
}
