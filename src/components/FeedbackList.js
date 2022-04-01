import React from "react"
import bootstrap from "bootstrap"

function FeedbackList({feed, handleChange}){ 

const {username,content, phase} = feed

return(


<div class="container">
<div class="row">
    <div class="col-md-8">
        <div class="media g-mb-30 media-comment">
            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Img Description"/>
            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
              <div class="g-mb-15">
                <h5 class="h5 g-color-gray-dark-v1 mb-0">{username}</h5>
                <span class="g-color-gray-dark-v4 g-font-size-12" id="box">A few days ago</span>
              </div>
        
              <p>{content}</p>
            </div>
        </div>
    </div>

    
</div>
</div>

)
}
export default FeedbackList
