import { today_date_obj } from "./utils/vars.js";
import "./utils/dom_vars.js";
import { updateWholePage} from "./utils/list_classes/util_functions.js";
import { data_storage } from "./utils/list_classes/dataclass.js";


data_storage.loadUniqueIdFromLS(today_date_obj)
updateWholePage(today_date_obj)
