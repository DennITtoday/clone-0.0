import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid } from "../../node_modules/@mui/material/index";
import { useRouter } from "../../node_modules/next/router";
import ReactPlayer from "../../node_modules/react-player/lib/index";
import { IVideo } from "../../types/video";

const VideoPage = () => {
  const router = useRouter();

  const video: IVideo = {
    _id: "1",
    tittle: "FirstVideo",
    url: "https://www.youtube.com/watch?v=A0CfYSVzAZI&t=4068s",
    author: "vasyan",
    description: "try no to laugh",
  };

  return (
    <MainLayout>
      <Button
        style={{ fontSize: 32 }}
        variant={"outlined"}
        onClick={() => router.push("/videos")}
      >
        Into the list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=A0CfYSVzAZI&t=4475s"
          fullwidth
        ></ReactPlayer>
        {/* Если уж используешь MaterialUI, тогда используй ее классы,
        а не просто div */}
        <div style={{ margin: "20px 0" }}>
          <h1>Video name - {video.tittle}</h1>
          <h1>Author - {video.author}</h1>
          <h1>Short description - {video.description}</h1>
        </div>
      </Grid>
    </MainLayout>
  );
};

export default VideoPage;
