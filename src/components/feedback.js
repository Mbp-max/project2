import { useState,useEffect } from "react"
import FeedbackList from "./feedbackList"

function Feedback(){
    // const [formState, setFormState]= useState([])
    // const allFeedback = formState.map(feed =>{return < FeedbackList feed={feed}/>})
    // // const {username,content}=allFeedback
    // function feedbackData(){
    //     fetch(`http://localhost:3000/feedback/`)
    //     .then(res => res.json())
    //     .then(data => setFormState(data))
        
    // }
    // useEffect(feedbackData,[])
    function handleFeedback(e){
        const name = e.target.getAttribute("id")
        setShow(true)
        return setCurrentPhase(phases.find((phase) => (phase.Phase === name))) 
    }

    function handleChange(e){
        const key = e.target.name
        setFormState(prevState =>({...prevState,[key]:e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/feedback/`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accepts: "application/json"
        },
        body: JSON.stringify(formState)
        })
        .then(res => res.json())
        .then(data => setFormState(data))
    }
    
    return (
        <>
        <br></br>
        {allFeedback}
        <form onSubmit={handleSubmit} name="new_feedback" >
            <input onChange={handleChange} name="username" placeholder="Enter Your UserName"/> 
            <br></br>
            <textarea onChange={handleChange} name="content" placeholder="Write Your Message" rows="6" cols="33"/>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    );
}
export default Feedback;