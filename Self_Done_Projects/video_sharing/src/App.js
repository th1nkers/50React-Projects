import React,{useState} from 'react';
import { Grid } from '@mui/material';
import {SearchBar, VideoList, VideoDetail} from './components';
import './App.css';
import youtube from './api/youtube';

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  async function submitHandler(searchTerm){
    const {data: {items: videos}} = await youtube.get("search",{
      params:{
        part: "snippet",
        maxResults: 15,
        key: "AIzaSyDblK5vtG3kCdZuP0UzLosIRJDYztg5qK4",
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
              <SearchBar onSubmit={submitHandler}/>
          </Grid>
          <Grid item xs={8}>
          <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
