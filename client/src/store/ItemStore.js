import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._items= []
        makeAutoObservable(this)
    }
    get items() {
        return this._items
    }

    setItems(items) {
        this._items = items
    }
}