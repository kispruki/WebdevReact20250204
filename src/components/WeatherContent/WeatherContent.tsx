import { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";


const WeatherContent = () => {

    const {shownCities} = useContext(WeatherContext);

    return ( <div className="w-full m-2 text-gray-300">
        <h1>Weather Content</h1>
    </div> );
}
 
export default WeatherContent;