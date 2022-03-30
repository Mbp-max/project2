import ReactPlayer from "react-player";
import Videoplayer from "./Videoplayer";
function Playlists({video, handleOnClick}){
const {title, url} = video
function handleOnClick(e){
    console.log("click")
    return <Videoplayer video={video}/>
}
return (
    <li onClick={handleOnClick} id={url}>{title}</li>
)
}
export default Playlists 