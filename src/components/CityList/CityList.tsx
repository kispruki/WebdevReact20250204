import citiesData from "./../../cities.json"

const CityList = () => {
    return ( 
    <div className="w-1/4 bg-blue-700" >
        {citiesData.map((val, index)=>{
            return <div key={`cities-buttons-${index}`} 
            className="cityBtn"> {val.name}</div>
        })}
    </div> );
}
 
export default CityList; 