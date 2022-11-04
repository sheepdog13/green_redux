import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount, incrementAsync } from "../modules/counter";

const Count = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
    return (  
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>+1</button>
            <button onClick={()=>{
                // incrementByAmount()의 인수값으로 들어가는 값는 payload로 전달됨
                dispatch(incrementByAmount(10))
            }}>+10</button>
            <button onClick={()=>{dispatch(incrementAsync())}}>1초 뒤에 증가</button>
        </div>
    );
}
 
export default Count;