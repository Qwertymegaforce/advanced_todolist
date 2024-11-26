import { today_date_obj } from "./utils/vars.js";
import { setDayOfWeek, setDate } from "./utils/setdate_functions.js";
import { addbutton_DOM } from "./utils/dom_vars.js";
setDayOfWeek(today_date_obj);
setDate(today_date_obj);
addbutton_DOM.addEventListener("click", () => {
});
