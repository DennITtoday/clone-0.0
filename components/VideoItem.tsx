import React, { FC } from "react";
import { Card, IconButton } from "../node_modules/@mui/material/index";
import { IVideo } from "../types/video";
import styles from "../styles/Video.module.scss";
import { Pause, PlayArrow } from "../node_modules/@mui/icons-material/index";
import ReactPlayer from "../node_modules/react-player/lib/index";
import { useRouter } from "../node_modules/next/router";

interface VideoItemProps {
  video: IVideo;
  active?: boolean;
}

const VideoItem: FC<VideoItemProps> = ({ video, active = false }) => {
  const router = useRouter();

  return (
    <Card
      className={styles.video}
      onClick={() => router.push("/videos/" + video._id)}
    >
      {/* Попробуй покастомизируй реакт плеер пропсами,
      в будущем понадобится) */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=A0CfYSVzAZI&t=4475s`}
      />
    </Card>
  );
};

export default VideoItem;
