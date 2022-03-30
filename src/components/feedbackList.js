import React from "react"

function FeedbackList({feed}){ 
const {username,content} = feed

console.log(feed)


return(
<>
<div>Feedback</div>
            <ul>{username}</ul>
            <ul>{content}</ul>
</>
)
}
export default FeedbackList