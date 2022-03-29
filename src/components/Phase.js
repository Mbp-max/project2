
function Phase({phase, id, name, video, description, feedback}){
    console.log(phase);
    return(
    <>
    <h1>{name} </h1> 
    <div>
        {description}
    </div>
        <div>videos</div>
    <div>{feedback}</div>
    </>)
}
export default Phase