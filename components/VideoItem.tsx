import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../styles/VideoItem.module.scss'
import { useRouter } from "next/router";

const VideoItem = ({ videos }) => {
    const router = useRouter()
    return (
        <>
            <Grid margin='40px' templateColumns='repeat(4, 1fr)' >
                <GridItem className={styles.videoList} width='full' maxWidth='600px' >
                    <Image onClick={() => router.push('/videos/' + videos.videoID)}
                        src={'http://localhost:5000/' + videos.picture}
                        alt='PICTURE ERROR'
                        height='180px'
                        width='100%'
                    />
                    <Box pt={2} flexDirection='column'>
                        <Text onClick={() => router.push('/videos/' + videos.videoID)}>{videos.videoName}</Text>
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
};


export default VideoItem;