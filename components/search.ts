import axios from "axios"


export const searchVideos = (query:string) => {
    return async (videoSearch: any) => {
        try {
            const response = axios.get('http://localhost:5000/videos' + query)
            videoSearch({ payload: (await response).data })
        }
        catch (e) {
            videoSearch({
                payload: 'ERROR_MESSAGE'
            })
        }
    }
}