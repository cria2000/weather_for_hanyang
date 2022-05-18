export type WeatherDataType = {
        id: number
        hashTag: string
        icon: string
}


export const weatherMap = new Map<number, WeatherDataType>(
    [[0, {id: 0, hashTag: '맑은날씨더멋진사자상', icon: '🌞🦁'}],
            [1, {id: 1, hashTag: '당장달려가자서울숲으로', icon: '🌲🌞'}],
            [2, {id: 2, hashTag: '인문대오르다보니땀이', icon: '💧'}],
            [3, {id: 3, hashTag: '습하고꿉꿉한중도', icon: '🌦'}],
            [4, {id: 4, hashTag: '통학러울게만드는축축2호선', icon: '🚎🌂'}],
            [5, {id: 5, hashTag: '추적추적내리는비', icon: '🌧'}],
            [6, {id: 6, hashTag: '집가고싶은흐린날씨', icon: '☁'}],
            [7, {id: 7, hashTag: '88계단올라도기분좋은산들바람', icon: '☄'}],
            [8, {id: 8, hashTag: '한양대는눈올때더멋져', icon: '☃'}],
            [9, {id: 9, hashTag: '날아갈것같은바람', icon: '🌀'}],
            [10, {id: 10, hashTag: '청계천따라따릉이타기최고', icon: '🚲'}]])