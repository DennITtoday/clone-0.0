import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid } from '../../node_modules/@mui/material/index';
import { useRouter } from '../../node_modules/next/router';
import ReactPlayer from '../../node_modules/react-player/lib/index';


const VideoPage = () => {
    const video: IVideo = { _id: '1', tittle: "FirstVideo", url: 'https://www.youtube.com/watch?v=A0CfYSVzAZI&t=4068s', author: "vasyan", description: "try no to laugh" }
    const router = useRouter()
    return (

        <MainLayout>
            <Button style={{ fontSize: 32 }}
                variant={"outlined"}
                onClick={() => router.push('/videos')}>Into the list</Button>
<Grid container style={{margin:'20px 0'}}>
    <ReactPlayer url ="https://www.youtube.com/watch?v=A0CfYSVzAZI&t=4475s" fullwidth>
    </ReactPlayer>
    <div style={{margin:'20px 0'}}>

        <h1>Video name - {video.tittle}</h1>
        <h1>Author - {video.author}</h1>
        <h1>Short description - {video.description}</h1>
    </div>
</Grid>

        </MainLayout>
    );
};

export default VideoPage; 