import { Box } from '@chakra-ui/react';
import React from 'react'
import VideoList from "../components/VideoList";
import { useTypedSelector } from '../hooks/usetypedSelector';
import { fetchVideos } from '../store/actions-creators/video';



const Index = () => {
  const { videos, error } = useTypedSelector(state => state.video)
  if (error) {
    return <Box>{error}</Box>

  }
  return (
    <>
      <VideoList videos={videos} />
    </>
  );
}

export default Index;

