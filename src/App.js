import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useQuery } from '@tanstack/react-query';


function App() {
  // let [city , setCity]=useState("Islamabad")
  let cityName = localStorage.getItem("city")
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`http://api.weatherapi.com/v1/current.json?key=2088ff9aa4684eca955134251231910&q=${cityName}&aqi=yes`).then(
        (res) => res.json(),
      ),
  })



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
