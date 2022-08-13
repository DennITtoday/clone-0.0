export interface IVideo {

    _id: string;
    tittle: string;
    preview: string;
    video: string;
    description: string
}
export interface VideoState {
    videos: IVideo[];
    error: string;
}

export enum VideoActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
}
interface FetchVideosAction {
    type: VideoActionTypes.FETCH_TRACKS;
    payload: IVideo[]
}

interface FetchVideosErrorAction {
    type: VideoActionTypes.FETCH_TRACKS_ERROR;
    payload: string
}

export type VideoAction = FetchVideosAction | FetchVideosErrorAction