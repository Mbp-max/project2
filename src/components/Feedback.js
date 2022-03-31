import { useState,useEffect } from "react"
import FeedbackList from "./FeedbackList"

function Feedback({currentFeedback}){
    console.log(currentFeedback)
  
  

    // function handleChange(e){
    //     const key = e.target.name
    //     setFormState(prevState =>({...prevState,[key]:e.target.value}))
    // }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     fetch(`http://localhost:3000/feedback/`,{
    //     method: "POST",
    //     headers:{
    //         "Content-Type": "application/json",
    //         Accepts: "application/json"
    //     },
    //     body: JSON.stringify(formState)
    //     })
    //     .then(res => res.json())
    //     .then(data => setFormState(data))
    // }
    
    return (
        <>
        <br></br>
        < FeedbackList currentFeedback={currentFeedback}/>
        <form name="new_feedback" >
            <input name="username" placeholder="Enter Your UserName"/> 
            <br></br>
            <textarea  name="content" placeholder="Write Your Message" rows="6" cols="33"/>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    );
}
export default Feedback;