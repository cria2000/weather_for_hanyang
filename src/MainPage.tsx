import {MainWeather} from "./MainWeather";
import {MainClothes} from "./MainClothes";
import messages from "./constant/messages";
import {useNavigate} from "react-router-dom";

type Props = {

};
export const MainPage = (props: Props) => {
    const navigation = useNavigate()

    const handleClickButton = () => {
        navigation('/list')
    }

    return (
        <div className="main_page">
            <MainWeather mainWeather={11} secondWeather={12}/>
            <MainClothes top={1} pants={4} bringOuter topPercentage={58} pantsPercentage={42} bringOuterPercentage={50}/>
            <button className="weather_button" onClick={handleClickButton}>{messages.askOpinion}</button>
        </div>
    );
};