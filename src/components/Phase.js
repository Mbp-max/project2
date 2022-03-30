import React,{useState} from "react"
import Feedback from "./Feedback"
import Videos from "./Videos"


function Phase({show, name,description,videos,formState}) {


// const [show,setShow]=useState(false)

// function handleChange() {
//     setShow(!show) 
//     console.log("s")
// }
// console.log(description)


return(
    
    <>
    {show ? <div>
    <h1>{name}</h1>
    <div>{description}</div>
    <br></br>
    <div><Videos videos={videos} />
    <Feedback formState={formState} /></div>
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