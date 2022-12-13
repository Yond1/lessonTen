import { legacy_createStore as createStore } from "redux";

import { AllReducers } from "./../reducers/index";

export const store = createStore(AllReducers);
