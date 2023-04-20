import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._items= [
            {id: 1, name: "Булка вкусная", price:150, description: "РЕАЛЬНО ВКУСНЕЙШАЯ булка ПОКУПАЙТЕ", img: `http://mobimg.b-cdn.net/v3/fetch/77/773125d50028b87fc8dd7a310c685a07.jpeg`},
            {id: 2, name: "Булка вкусная", price:150, description: "РЕАЛЬНО ВКУСНЕЙШАЯ булка ПОКУПАЙТЕ", img: `http://mobimg.b-cdn.net/v3/fetch/77/773125d50028b87fc8dd7a310c685a07.jpeg`},
            {id: 3, name: "Булка вкусная", price:150, description: "РЕАЛЬНО ВКУСНЕЙШАЯ булка ПОКУПАЙТЕ", img: `http://mobimg.b-cdn.net/v3/fetch/77/773125d50028b87fc8dd7a310c685a07.jpeg`},
            {id: 4, name: "Булка вкусная", price:150, description: "РЕАЛЬНО ВКУСНЕЙШАЯ булка ПОКУПАЙТЕ", img: `http://mobimg.b-cdn.net/v3/fetch/77/773125d50028b87fc8dd7a310c685a07.jpeg`},
            {id: 5, name: "Булка вкусная", price:150, description: "РЕАЛЬНО ВКУСНЕЙШАЯ булка ПОКУПАЙТЕ", img: `http://mobimg.b-cdn.net/v3/fetch/77/773125d50028b87fc8dd7a310c685a07.jpeg`},
            {id: 6, name: "Булка вкусная", price:150, description: "РЕАЛЬНО ВКУСНЕЙШАЯ булка ПОКУПАЙТЕ", img: `http://mobimg.b-cdn.net/v3/fetch/77/773125d50028b87fc8dd7a310c685a07.jpeg`}
        ]
        makeAutoObservable(this)
    }
    get items() {
        return this._items
    }
}