import { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";
import { ICity } from "../../util";



const CityList = () => {
    const {cities, addCity} = useContext(WeatherContext);
    const handleAdd = (city:ICity) => {
        addCity(city)
    }
    return ( 
    <div className="w-1/4 bg-blue-700 flex flex-col flex-wrap rounded">
        {cities.map((val, index)=>{
            return <div key={`cities-buttons-${index}`} onClick={() => {handleAdd(val)}}
            className="cityBtn"> {val.name}</div>
        })}
    </div> );cities
}
 
export default CityList; 

