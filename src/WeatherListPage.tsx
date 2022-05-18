import * as React from 'react';
import {weatherMap} from "./weatherPreset";
import messages from "./constant/messages";
import {clothesPantsMap, clothesTopMap} from "./ClothesPreset";
import './styles/WeatherListModal.css'
import {HighlightSpan} from "./component/HighlightSpan";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactGA from 'react-ga';

type Props = {
};
export const WeatherListPage = ({}: Props) => {
    const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID ?? ''
    const navigation = useNavigate()

    const [selectedTag, setSelectedTag] = useState<number>()
    const [selectedTop, setSelectedTop] = useState<number>()
    const [selectedPants, setSelectedPants] = useState<number>()
    const [selectedBringOuter, setSelectedBringOuter] = useState<boolean>()

    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
        ReactGA.set({page: window.location.pathname});
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);


    const handleClickWeatherTag = (weatherTag: number) => () => {
        setSelectedTag(weatherTag)
    }

    const handleClickTop = (top: number) => () => {
        setSelectedTop(top)
    }

    const handleClickPants = (pants: number) => () => {
        setSelectedPants(pants)
    }

    const handleClickBringOuter = (bringOuter: boolean) => () => {
        setSelectedBringOuter(bringOuter)
    }

    const handleClickBack = () => {
        navigation('/')
    }

    const handleClickSendButton = () => {
        ReactGA.event({
            category: "Event",
            action: "click send button",
            label: `${selectedTag} ${selectedTop} ${selectedPants} ${selectedBringOuter}`
        })
    }

    return (
                <div className="weather_list_modal">
                    <div className="button_container">
                    <button className="button_back" onClick={handleClickBack} />
                    </div>
                    <div className="list_container">
                        <div className="choose_statement">{messages.chooseWeatherKeyword}</div>
                        <div className="weather_list">
                        {[...weatherMap?.values()]?.map(weather =>
                            <button key={`${weather?.id}_${weather?.hashTag}`} className={`weather_data ${selectedTag === weather.id ? 'selected': ''}`}
                            onClick={handleClickWeatherTag(weather?.id)}
                            >
                            <HighlightSpan
                                originKeyword={'#  '.concat(weather?.hashTag)}
                                highlightKeyword={`#`}/>
                            </button>)}
                        </div>
                    </div>
                    <div className="list_container">
                        <div  className="choose_statement">{messages.chooseClothesTop}</div>
                        <div className="clothes_list">
                        {[...clothesTopMap.values()]?.map(top =>
                            <button key={top.id}
                                    className={`cloth_data ${selectedTop === top.id ? 'selected': ''}`}
                                    onClick={handleClickTop(top.id)}>{top.name}
                            </button>)}
                        </div>
                    </div>
                    <div className="list_container">
                        <div  className="choose_statement">{messages.chooseClothesPants}</div>
                        <div className="clothes_list">
                            {[...clothesPantsMap.values()]?.map(pants =>
                                <button key={pants.id}
                                        className={`cloth_data ${selectedPants === pants.id ? 'selected': ''}`}
                                        onClick={handleClickPants(pants.id)}>{pants.name}
                                </button>)}
                        </div>
                    </div>
                    <div className="list_container">
                        <div className="choose_statement">{messages.isBringOuterWear}</div>
                        <button className={`outer_data ${selectedBringOuter ? 'selected': ''}`} onClick={handleClickBringOuter(true)}> {messages.bringOuter}</button>
                        <button className={`outer_data ${selectedBringOuter === false ? 'selected' : ''}`} onClick={handleClickBringOuter(false)}>{messages.notBringOuter}</button>
                    </div>
                    <button className="button_send" onClick={handleClickSendButton}>{messages.sendOpinion}</button>
                </div>
    );
};