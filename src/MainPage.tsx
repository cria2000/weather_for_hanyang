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
            <MainWeather mainWeather={2} secondWeather={0}/>
            <MainClothes top={1} pants={4} bringOuter={false} topPercentage={67} pantsPercentage={40} bringOuterPercentage={53}/>
            <button className="weather_button" onClick={handleClickButton}>{messages.askOpinion}</button>
        </div>
    );
};