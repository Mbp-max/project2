import React from "react"

function FeedbackList({feed, handleChange}){ 

const {username,content, phase} = feed

return(
<>

            <ul>Username: {username}</ul>
            <ul>Comment: {content}</ul>
</>
)
}
export default FeedbackList