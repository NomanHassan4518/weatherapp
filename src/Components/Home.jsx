import React from 'react'
import { LiaCloudSolid } from 'react-icons/lia'
import { TiWeatherWindy } from 'react-icons/ti'
import { WiHumidity } from 'react-icons/wi'
import { GiPressureCooker } from 'react-icons/gi'

const Home = (props) => {
  let weatherData = props.data;

  let weatherDetails = [
    {
      name: "Feels Like",
      temp: `${weatherData?.main?.feels_like}°C`,
      icon: <LiaCloudSolid />
    },
    {
      name: "Wind Speed",
      temp: `${weatherData?.wind?.speed} m/s`,
      icon: <TiWeatherWindy />
    },
    {
      name: "Humidity",
      temp: `${weatherData?.main?.humidity}%`,
      icon: <WiHumidity />
    },
    {
      name: "Pressure",
      temp: `${weatherData?.main?.pressure} hPa`,
      icon: <GiPressureCooker />
    },
  ]
  return (
    <div className='xl:px-16 md:px-10 px-3 mt-8 pb-7 '>
      <div style={{ width: "100%", height: "420px" }} className='shadow-xl rounded-[12px] ' >
        <div className='pb-12 pl-10 ' style={{ width: "100%", height: "100%", backgroundImage: `url("https://wallpaper-house.com/data/out/9/wallpaper2you_325754.jpg") `, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", borderRadius: "12px" }}>
          <p className='font-semibold  text-4xl md:text-6xl pt-12  '>
            <span>{weatherData?.name} , {weatherData?.sys?.country} </span>
          </p>
          <p className='font-semibold flex  items-center text-4xl   '>
            <span>{weatherData?.main?.temp}°C</span>
            <img className='w-24 h-24' src={`https://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
              alt="Weather Icon"
            />
          </p>
        </div>
      </div>

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3  '>
        {
          weatherDetails.map((data, index) => (
            <div key={index} className='bg-white shadow-xl rounded-md text-black mt-3 md:mt-7 md:mx-4   px-3 py-1'>
              <p className='flex font-semibold items-center text-xl '>
                <span>{data.name}</span>
                <span className='ml-3 text-[#c08417] text-3xl '>{data.icon}</span>
              </p>
              <h1 className=' text-2xl font-bold'>{data.temp}</h1>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home
