import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {

    return (
        <Grid>
            <Box >
                {videos.map(videos =>
                    <VideoItem
                        key={videos.videoID}
                        videos={videos} />
                )}

            </Box>
        </Grid>
    );
};


export default VideoList;