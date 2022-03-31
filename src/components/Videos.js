
import Playlists from "./Playlists"
import Videoplayer from "./Videoplayer"
import React,{useState, useEffect} from 'react';

function Videos ({videos}){
const [chosenVideo, setChosenVideo] = useState([])

function handleVideo(e){
    const videoUrl = e.target.getAttribute("id")
    setChosenVideo(videos.find(vid => vid.url == videoUrl))
    console.log(chosenVideo)
}

const videoPlaylist = videos.map(video => {return (<Playlists video={video} handleVideo={handleVideo}/>)})

// const video = videos.map(video => video)


return (
<>
    <h1>Your Curated Playlist</h1>
    {videoPlaylist}
    <Videoplayer chosenVideo={chosenVideo}/>
</>
)
}




{/* <>
    <h1>Your Curated Playlist</h1>
    
    </> */}
export default Videos   