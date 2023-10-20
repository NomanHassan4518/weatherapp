import React from 'react'
import { LiaCloudSolid } from 'react-icons/lia'
import { TiWeatherWindy } from 'react-icons/ti'
import { WiHumidity } from 'react-icons/wi'
import { GiPressureCooker } from 'react-icons/gi'

const Home = (props) => {
  let weatherData = props.data;

  let weatherDetails = [
    {
      name: "Current Temperature",
      temp: `${weatherData?.current.temp_c}°C`,
      icon: <LiaCloudSolid />
    },
    {
      name: "Wind Speed",
      temp: `${weatherData?.current.wind_kph}Km/h`,
      icon: <TiWeatherWindy />
    },
    {
      name: "Humidity",
      temp: `${weatherData?.current.humidity}%`,
      icon: <WiHumidity />
    },
    {
      name: "Pressure",
      temp: `${weatherData?.current.pressure_mb}mb`,
      icon: <GiPressureCooker />
    },
  ]
  return (
    <div className='xl:px-16 md:px-10 px-3 mt-8 pb-8'>
      <div className='pb-12 pl-10' style={{ backgroundImage: `url("https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg") `, backgroundSize: "100% 500px", backgroundRepeat: "no-repeat", width: "100%", height: "400px", borderRadius: "12px" }}>

        <p className='font-semibold ,  text-3xl md:text-6xl pt-12 '>
          <span>{weatherData?.location.name} , </span>
          <span>{weatherData?.location.country}</span>
        </p>
        <p className='font-semibold , text-4xl pt-5 '>
          <span>{weatherData?.current.temp_c}°C</span>
          <span className='ml-10'>{weatherData?.current.condition.text}</span>
        </p>
        <p className='mt-4 text-2xl '>Local Time: {weatherData?.location.localtime}</p>
        <p className='mt-4 text-2xl '>Feels Like: {weatherData?.current.feelslike_c}°C</p>
      </div>

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3  '>
        {
          weatherDetails.map((data, index)  => (
            <div key={index} className='bg-white rounded-md text-black mt-3 md:mt-7 mx-4   px-3 py-2'>
              <p className='flex font-semibold items-center text-xl '>
                <span>{data.name}</span>
                <span className='ml-3 text-[#c08417] text-3xl '>{data.icon}</span>
              </p>
              <h1 className='mt-2 text-2xl font-bold'>{data.temp}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
