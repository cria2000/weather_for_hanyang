import * as React from 'react';
import './styles/MainFrame.css'
import {Route, Routes} from "react-router-dom";
import {WeatherListModal} from "./WeatherListModal";
import {MainPage} from "./MainPage";

type Props = {

};
export const MainFrame = (props: Props) => {

    return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/list' element={<WeatherListModal />} />
    </Routes>
    )
};