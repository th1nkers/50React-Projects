import React from "react";
import { Paper, Typography,Grid } from "@mui/material";

const VideoItem = (props) => {

  const { video, onVideoSelect } = props;

  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
