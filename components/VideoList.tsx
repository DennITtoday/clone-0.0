import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { IVideo } from "../types/video";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }: { videos: IVideo }) => {

    return (
        <Grid>
            <Grid margin='40px' templateColumns='repeat(4, 1fr)'>
                {videos.map(video =>
                    <VideoItem
                        key={video.videoName}
                        video={video} />
                )}

            </Grid>
        </Grid>
    );
};


export default VideoList;