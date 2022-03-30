import ReactPlayer from "react-player";
function Videoplayer({video}){
    console.log(video)
    const {title, url} = video
    return(
        <>
        <h2>{title}</h2>

    <div>
          <ReactPlayer
            url={url}
          />
    </div>
    </>
    )
}
export default Videoplayer