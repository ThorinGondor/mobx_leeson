import { makeAutoObservable } from "mobx";

class ListStore {
    // 1. 定义数据
    list = ['Ferrari', 'Mclaren', 'Alpine']

    constructor() {
        // 2. 把数据改为响应式
        makeAutoObservable(this)
    }

    get getList() {
        return this.list
    }

    // 3. 修改数据的方法
    addList = () => {
        this.list.push('Red Bull', 'Renault')
    }
}

export {ListStore}