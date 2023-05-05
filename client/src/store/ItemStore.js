import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._items= []
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setItems(items) {
        this._items = items
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
    get items() {
        return this._items
    }
}