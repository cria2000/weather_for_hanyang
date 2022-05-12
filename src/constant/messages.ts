export default {
    announceMainWeather: `오늘 하냥인들의 날씨는`,
    announceMostChosenClothes: ({mostChosenClothes, percentage}: {mostChosenClothes: string, percentage: number}) =>
        `오늘 ${percentage}%의 하냥인들은\n ${mostChosenClothes}를 선택했어요!`,
    getReadyToAnnounce: '현재 분석 중이에요!',
    askOpinion: '🌈오늘 당신의 날씨는?🌈',
    sendOpinion: '의견 보태기',
    chooseWeatherKeyword: '오늘 당신이 느끼는 날씨 키워드는?',
    chooseClothes: '오늘 날씨에 어울리는 옷은?',
    chosenClothesTitle: '👕오늘 많이 선택된 옷차림'
}