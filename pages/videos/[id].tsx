import { Box, Grid, GridItem, } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { IVideo } from "../../types/video";

const VideoPage = () => {
    const videos: IVideo = {
        _id: '1', tittle: 'Fuck off', author: 'UAreGay', preview: 'https://support.discord.com/hc/user_images/81TKxGEqVJruMIz7RCN8JA.jpeg', video: 'https://www.youtube.com/watch?v=Rq5SEhs9lws&t=440s'
    }
    return (
  <Grid m="6" >
    <GridItem  width="1200px" height="600px">
        <ReactPlayer url={videos.video}  width= "100%" height="100%" controls={true}></ReactPlayer>
    </GridItem>
    <GridItem p="2" fontSize={40} >{videos.tittle}</GridItem>
    <GridItem fontSize={16} color='gray' p="2">{videos.author}</GridItem>
  </Grid>

    );
};

export default VideoPage;