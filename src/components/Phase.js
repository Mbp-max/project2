import React,{useState} from "react"
function Phase(props){
    const [show,setShow]=useState(false)
 const {id,name,Description,Phase,Feedback:{username,content},videos}=props.phase

 function handleChange() {
    setShow(!show) 
    console.log("s")
}

    return(
    <>
    <h1 onClick={handleChange}>Phase{id}:{name}</h1>
        {show ? <div>
    <div>{Description}</div>
    <br></br>
    <div>videos</div>
    <div>{username}:{content}</div> </div>: null }
    
    </>
    )
}
export default Phase