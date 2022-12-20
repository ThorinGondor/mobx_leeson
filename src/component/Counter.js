import {makeAutoObservable} from "mobx";

class CounterStore {
    // 1. 定义数据
    count = 0;

    list = [1, 2, 3, 4, 5, 6]

    constructor() {
        // 2. 把数据改为响应式
        makeAutoObservable(this)
    }

    // 定义计算属性 mobx-computed 类似于Java类的get函数
    get listFilter () {
        return this.list.filter(instance => instance > 2)
    }

    // 3. 定义 action 函数（用于修改数据）
    addCount = () => {
        this.count++
    }

    addList = () => {
        this.list.push(1, 8, 2, 9)
    }
}

//4. 实例化对象，然后导出该对象给 React 使用
const counterStore = new CounterStore()
export {counterStore};
