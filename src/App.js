import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useQuery } from '@tanstack/react-query';


function App() {
  let cityName = localStorage.getItem("city")
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5555e631eb25d2ee80e48fc82a3ae893`).then(
        (res) => res.json(),
      ),
  })

console.log(data);

  return (
    <div className="bg-[#f5f2ed]">
      <div>
        <Navbar/>
      </div>

      <div>
        <Home data={data}/>
      </div>
    </div>
  );
}

export default App;
