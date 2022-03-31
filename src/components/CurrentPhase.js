import React,{useState} from "react";
import Feedback from "./Feedback"
import Videos from "./Videos"


function CurrentPhase({name,description,videos,currentFeedback,setRefetchFeedback, refetchFeedback}) {

   console.log(videos)
    
    return(
        
        <>
        <h1>{name}</h1>
        <div>{description}</div>
        <br></br>
        <div><Videos videos={videos} />
        </div>
        <div><Feedback  currentFeedback={currentFeedback} setRefetchFeedback={setRefetchFeedback} refetchFeedback={refetchFeedback}/></div>
        </>
        )
    }
    export default CurrentPhase