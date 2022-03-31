import ReactPlayer from "react-player";
import Videoplayer from "./Videoplayer";
import React,{useState, useEffect} from 'react';

function Playlists({video, handleVideo}){
const {title, url} = video

return (
    <li onClick={handleVideo} id={url}>{title}</li>
)
}
export default Playlists 