import { today_date_obj } from "./utils/vars.js";
import { setDayOfWeek, setDate } from "./utils/setdate_functions.js";
import "./utils/dom_vars.js";
import {updateTaskCounter } from "./utils/list_functions.js";
import { updatePageTodoList } from "./utils/list_functions.js";

setDayOfWeek(today_date_obj)
setDate(today_date_obj)
updateTaskCounter()
