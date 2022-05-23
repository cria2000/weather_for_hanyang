import * as React from 'react';
import messages from "./constant/messages";
import {clothesPantsMap, clothesTopMap} from "./ClothesPreset";

type Props = {
    top: number
    pants: number
    bringOuter: boolean
    topPercentage: number
    pantsPercentage: number
    bringOuterPercentage: number
};
export const MainClothes = ({top, pants, bringOuter, topPercentage, pantsPercentage, bringOuterPercentage}: Props) => {
    return (
        <div className="main_clothes">
            <div className="most_chosen_clothes">
                <div className="main_clothes_title">{messages.chosenClothesTitle}</div>
                <div className="border_line" />
                    <div className="main_clothes_statement">
                    {messages.announceMostChosenClothes(
                    {mostChosenTop: clothesTopMap.get(top)?.name ?? '',
                        mostChosenPants: clothesPantsMap.get(pants)?.name ?? '',
                        topPercentage: topPercentage, pantsPercentage: pantsPercentage})}
                </div>
            </div>
            <div className="bring_outer">
                <div className="main_clothes_title">{messages.considerOuter}</div>
                <div className="border_line" />
                <div className="main_clothes_statement">
                    {messages.announceBringOuter({isBring: bringOuter, percentage: bringOuterPercentage})}
                </div>
            </div>
        </div>
    );
};