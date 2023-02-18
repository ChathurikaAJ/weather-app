import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import Search from '@/components/Search'


export default function Home() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const getWeather = (event) => {
    event.preventDefault()
    setLoading(true)
    axios.get(url)
      .then((response) => {
        setWeather(response.data)
        console.log(response.data)
      })
    setCity('')
    setLoading(true)
  }

  return (
    <div className='relative'>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Search getWeather={getWeather}/>

      
      

    


    </div>
  )
}
