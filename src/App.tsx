
import './App.css'  
import CityList from './components/CityList/CityList'
import WeatherContent from './components/WeatherContent/WeatherContent'

function App() {


  return (
    <div className='page'>
      <WeatherContent />
      <CityList />
    </div>
  )
}

export default App
