
import Playlists from "./Playlists"
import Videoplayer from "./Videoplayer"
function Videos ({videos}){
    

const videoPlaylist = videos.map(video => {
    return (<Playlists video={video}/>)
})

// const video = videos.map(video => video)


return (
<>
    <h1>Your Curated Playlist</h1>
    {videoPlaylist}

    </>
)
}




{/* <>
    <h1>Your Curated Playlist</h1>
    
    </> */}
export default Videos   