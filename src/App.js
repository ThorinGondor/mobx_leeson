// 1. 导入 对象
import {useStore} from "./component/Root";
// 2. 导入中间件 mobx-react-lite 的 observer 函数
import {observer} from "mobx-react-lite"

function App() {

    const rootStore = useStore()
    console.log(rootStore)
    // 即可使用 对象 的参数和方法
    return (
        <div className="App">
            <span>{rootStore.counterStore.count}</span>
            <br/>
            <span>{rootStore.listStore.getList.join('-')}</span>
            <br/>
            <button onClick={rootStore.addData}>+</button>
        </div>
    )
}
// 3. 中间件包裹 App（只能是函数组件）
export default observer(App)

// 这么一看，mobx 非常像Java，先用 mobx 创建一个对象，有自己的属性、修改方法(Counter.js 的 addCount、addList 方法)、获取方法(计算属性 mobx-computed: get func(){...})，然后 React 可以操作对象