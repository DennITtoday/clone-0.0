import { AspectRatio, Box, Grid, GridItem, } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";
import { IVideo } from "../../types/video";


const VideoPage = ({ video }: { video: IVideo }) => {

  return (
    <Grid m="12" >
      <GridItem maxW="1200px" maxH="600px" p="1">
        <AspectRatio maxW="1200px" flexDirection="column" ratio={16 / 9}><video
          controls
          src={'http://localhost:5000/' + video.video}
        /></AspectRatio>
      </GridItem>
      <Box pt="20">
        <GridItem p="2" pt="2" fontSize={40} >{video.videoName}</GridItem>
        <GridItem fontSize={16} color='gray' p="2">{video.description}</GridItem>
      </Box>
    </Grid >
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("http://localhost:5000/videos/" + ctx.query.id);
  const video = await response.json();
  return {
    props: {
      video
    },
  }
}
export default VideoPage;