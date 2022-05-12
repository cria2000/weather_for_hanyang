import * as React from 'react';
import {weatherMap} from "./weatherPreset";
import messages from "./constant/messages";
import {Modal} from "@material-ui/core";
import {clothesMap} from "./ClothesPreset";
import './styles/WeatherListModal.css'
import {HighlightSpan} from "./component/HighlightSpan";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

type Props = {
    open?: boolean
    onClose?: () => void
};
export const WeatherListModal = ({open, onClose}: Props) => {
    const navigation = useNavigate()

    const [selectedTag, setSelectedTag] = useState<number>()
    const [selectedCloth, setSelectedCloth] = useState<number>()

    const handleClickWeatherTag = (weatherTag: number) => () => {
        setSelectedTag(weatherTag)
    }

    const handleClickCloth = (cloth: number) => () => {
        setSelectedCloth(cloth)
    }


    const handleClickBack = () => {
        navigation('/')
    }

    return (
        // <Modal
        //     open={!!open}
        //     style={{
        //         display: 'flex',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         zIndex: 1000,
        //     }}
        //     BackdropProps={{
        //         style: {
        //             backgroundColor: 'transparent',
        //         },
        //     }}>
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
                    <div  className="choose_statement">{messages.chooseClothes}</div>
                    <div className="clothes_list">
                        {[...clothesMap.values()]?.map(cloth =>
                            <button key={cloth.id}
                                    className={`cloth_data ${selectedCloth === cloth.id ? 'selected': ''}`}
                                    onClick={handleClickCloth(cloth.id)}>{cloth.name}
                            </button>)}
                    </div>
                    </div>
                    <button className="button_send">{messages.sendOpinion}</button>
                </div>
        // {/*</Modal>*/}
    );
};