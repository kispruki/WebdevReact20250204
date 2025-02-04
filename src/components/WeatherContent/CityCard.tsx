import { useContext } from "react";
import { ICity, ICityWeather } from "../../util";
import { WeatherContext } from "../../WeatherContext";

const CityCard = (props: {city:ICityWeather}) => {
    const c = props.city;
    const {removeCity} = useContext(WeatherContext)
    return ( <div className="rounded bg-blue-300 text-black m-2 w-fit h-25 p-2">
        <h1>{c.data.name}</h1>
        <p>{c.temp}</p>
        <button onClick={()=>{removeCity(c.data.name)}} className="cityBtn">Delete</button>
    </div> );
}
 
export default CityCard;