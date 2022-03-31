import React from "react"

function FeedbackList({currentFeedback}){ 
const {username,content} = currentFeedback

return(
<>
<div>Feedback</div>
            <ul>Username: {username}</ul>
            <ul>Comment: {content}</ul>
</>
)
}
export default FeedbackList