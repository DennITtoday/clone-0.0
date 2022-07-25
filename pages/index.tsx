import { Box, Button, useColorMode, Text, useColorModeValue, Image, Grid, GridItem } from "@chakra-ui/react";
import React from 'react'
import styles from '../styles/VideoItem.module.scss'
import VideoList from "../components/VideoList";
import { useRouter } from "next/router";
import { IVideo } from "../types/video";

const Index = () => {
  const router = useRouter()
    const videos: IVideo[] = [
        { _id: '1', tittle: 'Fuck off', author: 'UAreGay', preview: '/client/img/roflanebalo.jpg/', video: 'https://www.youtube.com/watch?v=A0CfYSVzAZI&t=3945s' }

    ]
  return (
    <>

      <Grid margin='40px' templateColumns='repeat(4, 1fr)' >
        <GridItem className={styles.videoList} width='full' maxWidth='600px' >
          <Image
            src='https://bit.ly/dan-abramov'
            alt='Victor'
            height='180px'
            width='100%'
          />
          <Text p={2}>It is description!</Text>
        </GridItem>
        <GridItem className={styles.videoList} width='full'
          maxWidth='600px'  >
          <Image
            src='https://bit.ly/dan-abramov'
            alt='Cictor'
            height='180px'
            width='100%'
          />
          <Text p={2}>It is description!</Text>
          <VideoList videos={videos} />
        </GridItem>
       
      </Grid>

    </>
  );
}

export default Index;