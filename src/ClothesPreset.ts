export type ClothesDataType = {
    id: number
    name: string
}

export const clothesTopMap = new Map<number, ClothesDataType>([
    [1, {id: 1, name: '반팔티'}],
    [2, {id: 2, name: '민소매'}],
    [3, {id: 3, name: '반팔셔츠'}],
    [4, {id: 4, name: '긴팔'}],
    [5, {id: 5, name: '맨투맨'}],
    [6, {id: 6, name: '후드티'}],
    [7, {id: 7, name: '자켓'}],
    [8, {id: 8, name: '트렌치코트'}],
    [9, {id: 9, name: '후드집업'}],
    [10, {id: 10, name: '가죽자켓'}],
    [11, {id: 11, name: '패딩'}],
    [12, {id: 12, name: '셔츠'}],
    [13, {id: 13, name: '반팔니트'}]
])

export const clothesPantsMap = new Map<number, ClothesDataType>([
    [1, {id: 1, name: '트레이닝반바지'}],
    [2, {id: 2, name: '트레이닝긴바지'}],
    [3, {id: 3, name: '청반바지'}],
    [4, {id: 4, name: '청긴바지'}],
    [5, {id: 5, name: '슬랙스'}],
    [6, {id: 6, name: '면긴바지'}],
    [7, {id: 7, name: '면반바지'}],
    [8, {id: 8, name: '롱스커트'}],
    [9, {id: 9, name: '미니스커트'}],
])