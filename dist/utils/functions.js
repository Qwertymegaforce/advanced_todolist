"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDayOfWeek = setDayOfWeek;
const dicts_1 = require("./dicts");
const dom_vars_1 = require("./dom_vars");
function setDayOfWeek(int_weekday) {
    let todays_day_string = dicts_1.int_to_dayOfWeek[int_weekday];
    dom_vars_1.day_of_week_DOM.textContent = todays_day_string;
}
