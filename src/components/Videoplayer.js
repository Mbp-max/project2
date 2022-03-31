import ReactPlayer from "react-player";

function Videoplayer({chosenVideo}){


    const {title, url} = chosenVideo
    
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