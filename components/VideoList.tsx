import React from 'react';
import { Box, Grid } from '../node_modules/@mui/material/index';
import { IVideo } from '../types/video';
import VideoItem from './VideoItem';
interface VideoListProps {
    videos: IVideo[]

}
const VideoList: React.FC<VideoListProps> = ({ videos }) => {

    return (

        <Grid container direction="column">
            <Box p={2}>
{videos.map(video => <VideoItem
   key={video._id}
   video={video} 
    />)}

            </Box>

        </Grid>
    )
}

export default VideoList;