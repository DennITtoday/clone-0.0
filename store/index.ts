import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./reducers";

// create a makeStore function
const makeStore:(context: Context) => configureStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });