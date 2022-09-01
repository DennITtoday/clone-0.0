import { Box, Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { IVideo } from "../types/video";
import VideoItem from "./VideoItem";


const VideoList = ({ videos }: { videos: IVideo }) => {

    return (
        <Grid>
            <SimpleGrid margin='30px' minChildWidth='380px'>
                {videos.map(video =>
                    <VideoItem
                        key={video.videoName}
                        video={video} />
                )}

            </SimpleGrid>
        </Grid>
    );
};


export default VideoList;