import { useSelector } from "react-redux"

function Counter() {

    // 관리되고 있는 여려개의 상태 중에 선택한다.
    //상태값을 선택하는 콜백함수를 전달
    const count=useSelector((state)=>state.counter);
    console.log(count);
    return(
        <div>
            <p>{count}</p>
            <button >+1</button>
            <button>-1</button>
        </div>
    )
}

export default Counter;