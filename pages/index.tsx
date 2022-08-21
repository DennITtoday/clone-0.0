import React from 'react'
import VideoList from "../components/VideoList";
import { IVideo } from '../types/video';



const Index = ({ videos }: { videos: IVideo }) => {
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

