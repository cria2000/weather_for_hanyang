import * as React from 'react';
import messages from "./constant/messages";
import {clothesMap} from "./ClothesPreset";
import {Box} from "@material-ui/core";

type Props = {
    clothes: number
    percentage: number
};
export const MainClothes = ({clothes, percentage}: Props) => {
    return (
        <div className="main_clothes">
            <div className="main_clothes_title">{messages.chosenClothesTitle}</div>
            <Box className="border_line"/>
            <div className="main_clothes_statement">
                {messages.announceMostChosenClothes(
                    {mostChosenClothes: clothesMap.get(clothes)?.name ?? '',
                    percentage: percentage})}
            </div>
        </div>
    );
};