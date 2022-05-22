import * as React from 'react';
import messages from "./constant/messages";
import {weatherMap} from "./weatherPreset";

type Props = {
    mainWeather?: number
    secondWeather?: number
};
export const MainWeather = ({mainWeather, secondWeather}: Props) => {
    return (
        <div className="main_weather">
            <div className="main_weather_statement">
                <div>
                    {mainWeather !== undefined ?
                        messages.announceMainWeather.concat(' ').concat(weatherMap.get(mainWeather)?.weather ?? '').concat('!\n')
                        : messages.getReadyToAnnounce
                    }
                </div>
                <div className="main_weather_icon">
                    {mainWeather !== undefined ? weatherMap.get(mainWeather)?.icon : ''}
                </div>
                <div className="weather_result">
                {'#'.concat(weatherMap.get(mainWeather ?? -1)?.hashTag?? messages.getReadyToAnnounce).concat(`\n`)}
                {'#'.concat(weatherMap.get(secondWeather ?? -1)?.hashTag ?? '')}
                </div>
            </div>
        </div>
    );
};