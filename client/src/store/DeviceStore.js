import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфони'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевізори'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Xiaomi'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 Pro', price: '32600', rating: 5, img: 'https://images.biggeek.ru/1/435/4b14/12465-456bigeek_image2.jpeg'},
            {id: 2, name: 'Iphone 6s', price: '4320', rating: 3.5, img: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png'},
            {id: 3, name: 'Galaxy A50', price: '9850', rating: 1, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/e/w/ewcccccccccwww_1.jpg'},
            {id: 3, name: 'Iphone 12 Pro', price: '25499', rating: 2, img: 'https://c.ua/image/cache/catalog/Appaltp/34122/34122-500x500.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}