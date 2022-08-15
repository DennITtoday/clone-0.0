import { AspectRatio, Box, Grid, GridItem, } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";


const VideoPage = (videos) => {

  return (
    <Grid m="12" >
      <GridItem maxW="1200px" maxH="600px" p="1">
        <AspectRatio maxW="1200px" flexDirection="column" ratio={16 / 9} ><iframe
          allowFullScreen
          src={'http://localhost:5000/videos/' + videos.video}
        /></AspectRatio>
      </GridItem>
      <Box pt="20">
        <GridItem p="2" pt="2" fontSize={40} >{videos.videoName}</GridItem>
        <GridItem fontSize={16} color='gray' p="2">{videos.description}</GridItem>
      </Box>
    </Grid >
  );
};

export async function getServerSideProps(params) {
  const response = await fetch('http://localhost:5000/videos' + params.videoID)
  const videos = await response.json()
  return {
    props: { videos }
  }
}
export default VideoPage;