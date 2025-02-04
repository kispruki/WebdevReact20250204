import { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";



const CityList = () => {
    const {cities} = useContext(WeatherContext);
    return ( 
    <div className="w-1/4 bg-blue-700 flex flex-col flex-wrap rounded">
        {cities.map((val, index)=>{
            return <div key={`cities-buttons-${index}`} 
            className="cityBtn"> {val.name}</div>
        })}
    </div> );cities
}
 
export default CityList; 