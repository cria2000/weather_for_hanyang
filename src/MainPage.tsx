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
            <MainWeather mainWeather={0} secondWeather={11}/>
            <MainClothes top={1} pants={6} bringOuter={false} topPercentage={72} pantsPercentage={46} bringOuterPercentage={66}/>
            <button className="weather_button" onClick={handleClickButton}>{messages.askOpinion}</button>
        </div>
    );
};