import React, {useState} from 'react'
import "./Room.css"

const Room = ()=> {
const [isLit, setLit] = useState(false)
let [temp, setTemp] = useState(22)
    
const handleClick = ()=> setLit(!isLit)
const handleOnClick = ()=> setLit(true)
const handleOffClick = ()=> setLit(false)
const incTemp = ()=> setTemp(++temp) 
const decTemp = ()=> setTemp(--temp)

return(
        <div className={`room ${isLit? "lit" : "dark"}`}>
        <h1>the Room is {isLit ? "lit" : "dark"}</h1><br/>
        <button onClick={handleClick}>click to switch the light</button>
        <button onClick={handleOnClick}>ON</button>
        <button onClick={handleOffClick}>OFF</button><br/><br/><br/>
        <h2>The room temperature is {temp} degree Celcius</h2>
        <button onClick={incTemp}>Increase Temp</button>
        <button onClick={decTemp}>Decrease Temp</button>
        </div>
    )
}

export default Room