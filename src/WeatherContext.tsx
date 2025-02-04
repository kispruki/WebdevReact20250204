import { createContext } from "react";
import { ICity } from "./util";

interface IWeatherContext{
    cities: ICity[];
    
}

export const WeatherContext = createContext({})