function Playlists({video, handleVideo}){
    const {title, url} = video
    
    return (
        <li onClick={handleVideo} id={url}>{title}</li>
    )
    }
    export default Playlists 