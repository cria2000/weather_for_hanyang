export default {
    announceMainWeather: `오늘 하냥인들의 날씨는`,
    announceMostChosenClothes: ({mostChosenTop, mostChosenPants, topPercentage, pantsPercentage}:
                                    {mostChosenTop: string, mostChosenPants: string, topPercentage: number, pantsPercentage: number}) =>
        `오늘 ${topPercentage}%의 하냥인들은 \n ${mostChosenTop}를 선택했고, \n\n${pantsPercentage}%의 하냥인들은 \n${mostChosenPants}를 선택했어요!`,
    announceBringOuter: ({isBring, percentage}:{isBring: boolean, percentage: number}) => {
        if(isBring){
            return `오늘 ${percentage}%의 하냥인들은\n 겉옷을 챙겼어요!`
        }else{
            return `오늘 ${percentage}%의 하냥인들은\n 겉옷을 챙기지 않았어요!`
        }
    },
    getReadyToAnnounce: '현재 분석 중이에요!',
    askOpinion: '🌈오늘 당신의 날씨는?🌈',
    sendOpinion: '의견 보태기',
    chooseWeatherKeyword: '오늘 당신이 느끼는 날씨 키워드는?',
    chooseClothesTop: '오늘 당신이 선택한 상의는?',
    chooseClothesPants: '오늘 당신이 선택한 하의는?',
    isBringOuterWear: '오늘 저녁에 겉옷을 챙겨야할까요?',
    chosenClothesTitle: ' 👕 오늘 많이 선택된 옷차림',
    bringOuter: '🙆 저녁에는 쌀쌀하니 챙겨요!',
    notBringOuter: '🙅 ‍챙기지 않아도 괜찮아요!',
    considerOuter: ' 🧥 겉옷 챙길까 말까?',
    sendSuccess: '의견이 성공적으로 보내졌습니다✔',
    sendFail: '날씨 키워드를 하나 이상 선택해주세요❕',
    possibleMultipleSelection: '(중복선택가능)'
}