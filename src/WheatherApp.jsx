import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WhetherApp() {
    const [weatherInfo, setWeatherInfo] = useState( {
         city:"Wonderland",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        whether:"haze",
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
      
        
    return(
        <div style={{textAlign:"center"}}>
            <h2>Wheather App by me</h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}