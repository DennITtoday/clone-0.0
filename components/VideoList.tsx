import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { IVideo } from "../types/video";
import VideoItem from "./VideoItem";
interface VideoListProps {
    videos: IVideo[]
}
const VideoList: React.FC<VideoListProps> = ({ videos }) => {

    return (
        <Grid>
            <Box >
                {videos.map(video =>
                    <VideoItem
                        key={video._id}
                        video={video} />
                )}

            </Box>
        </Grid>
    );
};

export default VideoList;