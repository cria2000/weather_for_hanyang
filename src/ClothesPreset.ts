export type ClothesDataType = {
    id: number
    name: string
}

export const clothesMap = new Map<number, ClothesDataType>([
    [1, {id: 1, name: '반팔티'}],
    [2, {id: 2, name: '민소매'}],
    [3, {id: 3, name: '반바지'}],
    [4, {id: 4, name: '긴팔'}],
    [5, {id: 5, name: '맨투맨'}],
    [6, {id: 6, name: '후드티'}],
    [7, {id: 7, name: '자켓'}],
    [8, {id: 8, name: '트렌치코트'}],
    [9, {id: 9, name: '후드집업'}],
    [10, {id: 10, name: '가죽자켓'}],
    [11, {id: 11, name: '패딩'}]
])