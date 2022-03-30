import React,{useState} from "react"
import Feedback from "./feedback"
import Videos from "./Videos"


function Phase({show, name,description,videos}) {

// const [show,setShow]=useState(false)

// function handleChange() {
//     setShow(!show) 
//     console.log("s")
// }
// console.log(description)

return(
    
    <>
    {show ? <div>
    <div>{name}</div>
    <div>{description}</div>
    <br></br>
    <div><Feedback /></div>
    <br></br>
    <div><Videos videos={videos} /></div>
    </div>
    : 
    <>
    <div>Welcome To Your Software Engineering Career</div>
    <h1>Use This Guide To Achieve Success At Your BootCamp </h1>
    <img src="https://cdn.geekwire.com/wp-content/uploads/2018/09/Flatiron-School_Classroom-1260x840.jpg" alt="img-FlatIron" className/>
    </>}
    </>
    )
}
export default Phase