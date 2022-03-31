import FeedbackList from "./FeedbackList"
import {useState, useEffect} from "react";
function Feedback({currentFeedback, setRefetchFeedback,refetchFeedback }){
    const [formState, setFormState] = useState([])
    // const id= currentFeedback.id
    console.log(currentFeedback)

    const oneFeed = currentFeedback.find(feed => feed.phase)
    const currentFeedPhase = oneFeed.phase
    console.log(currentFeedPhase)
    
    function handleChange(e){
        const key = [e.target.name]
        
        // const phase = currentPhase
        setFormState(prevState =>({...prevState,[key]:e.target.value}))
    }
  

    function handleSubmit(e){
        const {username, content} = formState
        const newFeedback = {
            username,
            content,
            phase: currentFeedPhase
        }
        e.preventDefault()
        fetch(`http://localhost:3000/feedback/`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accepts: "application/json"
        },
        body: JSON.stringify(newFeedback)
        })
        .then(res => res.json())
        .then(data => setFormState(data));
        
    }
    const allFeed = currentFeedback.map(feed => { return < FeedbackList feed={feed} handleChange={handleChange}/>})
    
    return (
        <>
        <br></br>
        <div >Feedback On This Phase</div>
        {allFeed}
        <form name="new_feedback" onSubmit={handleSubmit}>
            <input name="username" placeholder="Enter Your UserName" onChange={handleChange}/> 
            <br></br>
            <textarea  name="content" placeholder="Write Your Message" rows="6" cols="33" onChange={handleChange}/>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    );
}
export default Feedback;