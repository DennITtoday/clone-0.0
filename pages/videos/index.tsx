import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '../../node_modules/@mui/material/index';
import { useRouter } from '../../node_modules/next/router';
import { IVideo } from '../../types/video';

const Index = () => {
    const router = useRouter()
    const videos: IVideo[] =[

        {_id}
    ]
    return (

        <MainLayout>
            <Grid >
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Video list</h1>
                            <Button onClick={() => router.push('/videos/create')}>
                                Download</Button>
                        </Grid>
                    </Box>

                </Card>
            </Grid>
        </MainLayout>

    );

};

export default Index;