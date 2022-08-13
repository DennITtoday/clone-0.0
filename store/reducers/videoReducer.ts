import { VideoAction, VideoActionTypes, VideoState } from "../../types/video"

const initialState: VideoState = {
    videos: [],
    error: ''
}
export const videoReducer = (state = initialState, action: VideoAction): VideoState => {
    switch (action.type) {
        case VideoActionTypes.FETCH_TRACKS_ERROR:
            return { ...state, error: action.payload }
        case VideoActionTypes.FETCH_TRACKS:
            return { error: '', videos: action.payload }
        default:
            return state
    }
}