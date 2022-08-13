import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { videoReducer } from "./videoReducer";


export const rootReducer = combineReducers({
    video: videoReducer
})

export type RootState = ReturnType<typeof rootReducer>