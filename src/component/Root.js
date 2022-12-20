/**
 * Root.js 负责组合子模块，然后封装统一导出的供业务使用的方法
 */
import React from "react";

// 此处两种 导出方式，一种是导出一个对象，一种是导出一个类，如果导出的是类，那么在这里实例化一个对象即可
import {counterStore} from "./Counter"
import {ListStore} from "./ListStore";

class RootStore {

    counterStore

    listStore

    constructor() {
        this.counterStore = counterStore
        this.listStore = new ListStore()
    }

    addData = () => {
        this.counterStore.addCount()
        this.listStore.addList()
    }
}


/**
 * 下面这一块的导出 是样板业务代码 无需考虑为何会这么复杂，不过可以了解一下
 * @type {RootStore}
 */
const rootStore = new RootStore()
// 使用 react 的 createContext 机制 完成统一方法的封装
const context = React.createContext(rootStore)
// 通过 useContext 拿到 rootStore 实例对象，然后返回
const useStore = () => React.useContext(context)
export {useStore}