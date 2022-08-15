import { Box } from '@chakra-ui/react';
import React from 'react'
import VideoList from "../components/VideoList";



const Index = ({ videos }) => {
  return (
    <>
      <VideoList videos={videos} />
    </>
  );
}
export async function getServerSideProps() {
  const response = await fetch('http://localhost:5000/videos')
  const videos = await response.json()
  return {
    props: { videos },
  }
}
export default Index;

