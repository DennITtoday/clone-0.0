import { AspectRatio, Box, Grid, GridItem, } from "@chakra-ui/react";
import React from "react";
import { IVideo } from "../../types/video";

const VideoPage = () => {
  const videos: IVideo = {
    _id: '1', tittle: 'Fuck off', description: 'something....', preview: 'https://support.discord.com/hc/user_images/81TKxGEqVJruMIz7RCN8JA.jpeg', video: 'https://www.youtube.com/embed/QhBnZ6NPOY0'
  }
  return (
    <Grid m="12" >
      <GridItem maxW="1200px" maxH="600px" p="1">
        <AspectRatio maxW="1200px" flexDirection="column" ratio={16 / 9} ><iframe
          allowFullScreen
          src={videos.video}
        /></AspectRatio>
      </GridItem>
      <Box pt="20">
        <GridItem p="2" pt="2" fontSize={40} >{videos.tittle}</GridItem>
        <GridItem fontSize={16} color='gray' p="2">{videos.description}</GridItem>
      </Box>
    </Grid >

  );
};

export default VideoPage;