import Image from "next/image"
import { useEffect, useState } from "react"

const Weather = ({ weatherData, unit }) => {

  const [type, setType] = useState('C')

  useEffect(()=>{
    if(unit==='metric'){
      setType('C')
    } else {
      setType('F')
    }
  })

  return (
    <div className='relative flex flex-col max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      <div className='relative flex justify-between pt-12'>
        <div className="flex flex-xol items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather"
            width="100"
            height="100"
          />
          <p className="text-2xl">{weatherData.weather[0].main}</p>
        </div>

        <p className='text-7xl'>{weatherData.main.temp.toFixed(0)}&#176; {type}</p>
      </div>

      <div className='bg-black/50 relative p-8 rounded-md mt-10'>
        <p className="text-2xl text-center pb-6">Weather in {weatherData.name}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='font-bold text-2xl'>{weatherData.main.feels_like.toFixed(0)}&#176; {type}</p>
            <p className='text-xl'>Feels Like</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{weatherData.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{weatherData.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Weather