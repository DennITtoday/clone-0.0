import axios from "axios"
import { Dispatch } from "react"
import { VideoAction, VideoActionTypes } from "../../types/video"

export const fetchVideos = () => {

    return async (dispatch: Dispatch<VideoAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/videos')
            dispatch({ type: VideoActionTypes.FETCH_TRACKS, payload: response.data })
        } catch (e) {
            dispatch({
                type: VideoActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Something goes wrong... DOWNLOAD ERROR'
            })
        }
    }
}
