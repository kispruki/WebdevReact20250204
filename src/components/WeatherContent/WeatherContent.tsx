import { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";
import CityCard from "./CityCard";


const WeatherContent = () => {

    const {shownCities} = useContext(WeatherContext);
    
    
    return ( <div className="w-full m-2 text-gray-300 flex flex-row flex-wrap">

        {shownCities.map((c)=>{
            return <CityCard key={`citycard-${c.data.name}`} city={c}></CityCard>
        })}

    </div> )
}
 
export default WeatherContent;