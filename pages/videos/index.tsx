import React from "react";
import VideoList from "../../components/VideoList";
import MainLayout from "../../layouts/MainLayout";
import {
  Box,
  Button,
  Card,
  Grid,
} from "../../node_modules/@mui/material/index";
import { useRouter } from "../../node_modules/next/router";
import { IVideo } from "../../types/video";

const Index = () => {
  const router = useRouter();
  const videos: IVideo[] = [
    {
      _id: "1",
      tittle: "FirstVideo",
      url: "https://www.youtube.com/watch?v=A0CfYSVzAZI&t=4068s",
      author: "vasyan",
      description: "try no to laugh",
    },
  ];

  // Импорты тут еще куда ни шло, но в компонентах просто пиздец)
  // Либо ты криво проект создал и установил зависимости,
  // либо материал юи реально дерьмо ебучее)))

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Video list</h1>
              <Button onClick={() => router.push("/videos/create")}>
                Download
              </Button>
            </Grid>
          </Box>
          <VideoList videos={videos} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
