import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { IVideo } from "../types/video";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }: { videos: IVideo }) => {

    return (
        <Grid>
            <Box >
                {videos.map(video =>
                    <VideoItem
                        key={video.videoName}
                        video={video} />
                )}

            </Box>
        </Grid>
    );
};


export default VideoList;