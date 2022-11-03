import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, change, increaseAsync, decreaseAsync } from "../modules/counter";

const CounterBox = () => {
    // useSelector를 통해서 state의  원하는 값을 가져올수 있다
    const number = useSelector((state)=>(state.counter.number))
    const changeNum = useSelector((state)=>(state.counter.changeNum))
    // useDispatch를 통해서 사용할 함수를 가져옴
    const dispatch = useDispatch();

    // Callback함수를 이용해서 함수 새로 만듦 방지
    const onChange = useCallback((e)=>dispatch(change(e.target.value)),[dispatch])
    return (  
        <div>
            <h1>카운트입니다</h1>
            <h3>{number}</h3>
            <button onClick={()=>{
                // dispatch를 통해 {type:"액션"}을 전달해서 사용
                // >>> counter의 리듀서 함수로 가서 같은 타입을 찾은 후 실행
                // >>> 객체값을 직접입력할 경우 오타 및 실수가 있을수 있어
                //     값을 변경하지 않고 사용하기위해 counter에서 가져와서 사용
                dispatch(increase())
                }}>
                    증가
            </button>
            {/* counter의 리듀서 함수를 수정해서 1씩 감소하는 버튼작성 */}
            <button onClick={()=>{
                dispatch(decrease())
            }}>
                감소
            </button>
            {/* thunk를 이용하여 비동기로 작성 */}
            <button onClick={()=>{dispatch(increaseAsync())}}>1초 뒤 증가</button>
            <button onClick={()=>{dispatch(decreaseAsync())}}>2초 뒤 감소</button>

            {/* changeNum값을 바꿀 input */}
            <p>{changeNum}</p>
            <input type="text" onChange={(e)=>{dispatch(change(e.target.value))}}/>
            {/* 익명함수 화살표 함수로 작성시 렌더될때마다 함수를 다시생성 > Callback으로 저정 해서 사용 */}
            <input type="text" onChange={onChange}/>

        </div>
    );
}
 
export default CounterBox;