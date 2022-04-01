import ReactPlayer from "react-player";

function Videoplayer({chosenVideo}){


    const {title, url} = chosenVideo
    
    return(
        <>
        <h2>{title}</h2>

    <div>
      <center>
          <ReactPlayer
            url={url}
            />
            </center>
    </div>
    </>
    )
}
export default Videoplayer