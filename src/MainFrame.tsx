import * as React from 'react';
import './styles/MainFrame.css'
import {Route, Routes} from "react-router-dom";
import {WeatherListPage} from "./WeatherListPage";
import {MainPage} from "./MainPage";

type Props = {

};
export const MainFrame = (props: Props) => {

    return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/list' element={<WeatherListPage />} />
    </Routes>
    )
};