import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../styles/VideoItem.module.scss'
import { useRouter } from "next/router";
import { IVideo } from "../types/video";

const VideoItem = ({ video }: { video: IVideo }) => {
    const router = useRouter()
    return (
        <>
            <Grid margin='40px' templateColumns='repeat(4, 1fr)' >
                <GridItem className={styles.videoList} width='full' maxWidth='600px' >
                    <Image onClick={() => router.push('/videos/' + video.videoName)}
                        src={'http://localhost:5000/' + video.picture}
                        alt='PICTURE ERROR'
                        height='180px'
                        width='100%'
                    />
                    <Box pt={2} flexDirection='column'>
                        <Text onClick={() => router.push('/videos/' + video.videoName)}>{video.videoName}</Text>
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
};


export default VideoItem;