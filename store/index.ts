import { AnyAction, applyMiddleware, configureStore, createStore, Store } from "@reduxjs/toolkit";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import thunk, { ThunkDispatch } from "redux-thunk";
import { reducer, RootState } from "./reducers";

const makeStore
    = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>