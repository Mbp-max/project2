import Playlists from "./Playlists"
import Videoplayer from "./Videoplayer"
import React,{useState} from 'react';
import ReactPlayer from "react-player";
function Videos ({videos}){
    const [chosenVideo, setChosenVideo] = useState([])
    const [noVideo, setNoVideo]= useState(false)
    console.log(videos)
    
    function handleVideo(e){
        const videoUrl = e.target.getAttribute("id")
        setChosenVideo(videos.find(vid => vid.url == videoUrl))
        console.log(chosenVideo)
        setNoVideo(true)
    }
    
    const videoPlaylist = videos.map(video => {return (<Playlists video={video} handleVideo={handleVideo}/>)})
    
    // const video = videos.map(video => video)
    
    
    return (
    <>
        <h1>Your Curated Playlist</h1>
        <h2>⏬Click to Watch Any Of the Below Videos⏬</h2>
        <ol class="gradient-list">{videoPlaylist}</ol>
        {noVideo ? <Videoplayer chosenVideo={chosenVideo}/> :
        <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=GGSmywkXKOE'
        />
        </div>}
    </>
    )
    }
    
    export default Videos  