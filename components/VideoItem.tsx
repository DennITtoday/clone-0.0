import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IVideo } from "../types/video";
import styles from '../styles/VideoItem.module.scss'
import { useRouter } from "next/router";
interface VideoItemProps {
    video: IVideo;
    active?: boolean;
}
const VideoItem: React.FC<VideoItemProps> = ({ video, active = false }) => {
    const router = useRouter()
    return (
        <>
            <Grid margin='40px' templateColumns='repeat(4, 1fr)' >
                <GridItem className={styles.videoList} width='full' maxWidth='600px' >
                    <Image onClick={() => router.push('/videos/' + video._id)}
                        src={video.preview}
                        alt='Victor'
                        height='180px'
                        width='100%'
                    />
                    <Box pt={2} flexDirection='column'>
                        <Text onClick={() => router.push('/videos/' + video._id)}>{video.tittle}</Text>
                        <Text fontSize={12} color='gray'>  {video.author}</Text>
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
};

export default VideoItem;