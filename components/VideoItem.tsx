import { AspectRatio, Box, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../styles/VideoItem.module.scss'
import { useRouter } from "next/router";
import { IVideo } from "../types/video";

const VideoItem = ({ video }: { video: IVideo }) => {
    const router = useRouter()
    const handleMouseEnter = (e: any) => {
        const vid = e.target
        vid.muted = true
        vid.play()
    }

    // handle mouse leave
    const handleMouseLeave = (e: any) => {
        const vid = e.target
        vid.muted = false
        vid.currentTime = 0
        vid.pause()
    }
    return (
        <>

            <GridItem className={styles.videoList} width='full' maxWidth='380px' >
                <Link _hover={{ color: 'LightSteelBlue' }} style={{ textDecoration: 'none' }} href={'/videos/' + video.video.split('.')[0]}>
                    <AspectRatio height='180px' width='100%'><video
                        poster={'http://localhost:5000/' + video.picture}
                        src={'http://localhost:5000/' + video.video}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    /></AspectRatio>
                    <Box pt={2} flexDirection='column'>
                        <Text onClick={() => router.push('/videos/' + video.videoName)}>{video.videoName}</Text>
                    </Box>
                </Link>
            </GridItem>

        </>
    );
};


export default VideoItem;