import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useQuery } from '@tanstack/react-query';
import Spinner from './Components/Spinner';


function App() {
  let cityName = localStorage.getItem("city")
  const { data , isLoading } = useQuery({
    queryKey: ['weather'],
    queryFn: () =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5555e631eb25d2ee80e48fc82a3ae893`).then(
        (res) => res.json(),
      ),
  })

  if(isLoading){
    return <Spinner/>
  }


  return (
    <div className="bg-[#f5f2ed] satisfy">
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
