import React from "react";
import { IVideo } from "../types/video";
interface VideoItemProps {
    video: IVideo;
    active?: boolean;
}
const VideoItem: React.FC<VideoItemProps> = ({ video, active = false }) => {

    return (
        <div>
           {video.tittle}
        </div>
    );
};

export default VideoItem;