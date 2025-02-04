import { createContext , ReactNode, useEffect, useState} from "react";
import { ICity, ICityWeather } from "./util";
import citiesData from "./cities.json"


interface IWeatherContext{
    cities: ICity[];
    shownCities: ICityWeather[];
    addCity: (name: string) => void;
    removeCity: (name:string) => void;

}
const defaultWeatherContext:IWeatherContext = {
    cities: [],
    shownCities: [],
    addCity: (name:string) =>{},
    removeCity: (name:string) =>{},
}

export const WeatherContext = createContext<IWeatherContext>(defaultWeatherContext)

 async function getWeatherObject(city: ICity){
    
    // const response = await fetchWeatherApi("https://api.open-meteo.com/v1/forecast",param)
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m`).then(data=>data.json());

    let retObj: ICityWeather = {
        data: city,
        temp: response.current.temperature_2m,
        rel_humidity: response.current.relative_humidity_2m,
        is_day: response.current.is_day,
        rain: response.current.rain,
        windspeed: response.current.wind_speed_10m,
    };

    return retObj;
}

export const WeatherContextProvider = ({children, }:{children: ReactNode}) =>{

    const [cities, setCities] = useState<ICity[]>([]);

    useEffect(() => {
        setCities(citiesData as ICity[]);
        
    }, []);

    useEffect(() => {
        console.log(cities);
        if (cities.length > 0){
            getWeatherObject(cities[0]).then(data => console.log(data));
        }
    }, [cities]);
    
    const [shownCities, setShownCities] = useState<ICityWeather[]>([]);

    const addCity = (name:string) => {
        
    }

    const removeCity = (name:string) => {
        
    }

    return (<WeatherContext.Provider value={{cities, shownCities, addCity, removeCity}}>
        {children}
    </WeatherContext.Provider>)
}