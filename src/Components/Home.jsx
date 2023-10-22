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
      temp: `${weatherData?.main.feels_like}°C`,
      icon: <LiaCloudSolid />
    },
    {
      name: "Wind Speed",
      temp: `${weatherData?.wind.speed} m/s`,
      icon: <TiWeatherWindy />
    },
    {
      name: "Humidity",
      temp: `${weatherData?.main.humidity}%`,
      icon: <WiHumidity />
    },
    {
      name: "Pressure",
      temp: `${weatherData?.main.pressure} hPa`,
      icon: <GiPressureCooker />
    },
  ]
  return (
    <div className='xl:px-16 md:px-10 px-3 mt-8 pb-10'>
      <div className='pb-12 pl-10 shadow-xl' style={{ backgroundImage: `url("https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg") `, backgroundSize: "100% 500px", backgroundRepeat: "no-repeat", width: "100%", height: "400px", borderRadius: "12px" }}>

        <p className='font-semibold ,  text-3xl md:text-6xl pt-12 '>
          <span>{weatherData?.name} , {weatherData?.sys.country} </span>
        </p>
        <p className='font-semibold flex  items-center text-4xl pt-5 '>
          <span>{weatherData?.main.temp}°C</span>
          <span className='ml-10'>{weatherData?.weather[0].main==="Smoke"?<img className='w-36 h-32' src='https://o.remove.bg/downloads/30051fec-8606-40a7-9724-96ba0971890c/images-removebg-preview.png' alt='' />:"Smoke" || weatherData?.weather[0].main==="Clear"?<img className='w-36 h-32' src='https://o.remove.bg/downloads/d5d37c2b-0911-43f0-b172-870cd970f2d0/images-removebg-preview.png' alt='' />:"Clear" || weatherData?.weather[0].main==="Rain"?<img className='w-36 h-32' src='https://o.remove.bg/downloads/508c37a3-967b-4b06-ae63-13be4803a640/images-removebg-preview.png' alt='' />:"Rain" || weatherData?.weather[0].main==="Snow"?<img className='w-36 h-32' src='https://o.remove.bg/downloads/9a680ce6-339f-4807-8015-5f1a01b242a7/images-removebg-preview.png' alt='' />:"Snow" || weatherData?.weather[0].main==="Clouds"?<img className='w-36 h-32' src='https://o.remove.bg/downloads/dba1ee46-3ac8-4c90-886b-a5070eae8f44/images-removebg-preview.png' alt='' />:"Clouds"}</span>
         
        </p>
    
      </div>

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-1  '>
        {
          weatherDetails.map((data, index)  => (
            <div key={index} className='bg-white shadow-2xl rounded-md text-black mt-3 md:mt-7 mx-4   px-3 py-2'>
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
