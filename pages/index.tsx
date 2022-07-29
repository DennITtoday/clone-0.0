import { Box, Button, useColorMode, Text, useColorModeValue, Image, Grid, GridItem } from "@chakra-ui/react";
import React from 'react'
import styles from '../styles/VideoItem.module.scss'
import VideoList from "../components/VideoList";
import { useRouter } from "next/router";
import { IVideo } from "../types/video";

const Index = () => {
  const router = useRouter()
  const videos: IVideo[] = [
    { _id: '1', tittle: 'Fuck off', author: 'UAreGay', preview: 'https://support.discord.com/hc/user_images/81TKxGEqVJruMIz7RCN8JA.jpeg', video: 'https://www.youtube.com/watch?v=A0CfYSVzAZI&t=3945s' }

  ]
  return (
    <>
      <VideoList videos={videos} />
    </>
  );
}

export default Index;