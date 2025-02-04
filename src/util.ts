export interface ICity{
    lang:number;
    long:number;
    name:string;
}

export interface ICityWeather{
    temperature:number;
    relative_humidity:number;
    is_day: 0 | 1,
    rain: number;
    windspeed:number;
}