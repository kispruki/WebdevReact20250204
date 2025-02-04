export interface ICity{
    lat:number;
    long:number;
    name:string;
}

export interface ICityWeather{
    data: ICity;
    temp:number;
    rel_humidity:number;
    is_day: 0 | 1,
    rain: number;
    windspeed:number;
}