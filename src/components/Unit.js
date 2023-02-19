import { useEffect, useState } from "react"

const Unit = ({setUnit, getWeather}) => {

    const handleClick = (event)=> {
        const unit = event.target.innerText
        if (unit==="°C"){
            setUnit('metric')            
        } else {
            setUnit('imperial')
        }
        

    }

  return (
    <div className=' max-w-[500px] w-full m-auto pt-4 px-4 text-white'>
        <button onClick={handleClick}>°C</button>
        <span>  |  </span>
        <button onClick={handleClick}>°F</button>
    </div>
  )
}

export default Unit