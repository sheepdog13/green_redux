import { createSlice } from "@reduxjs/toolkit";

// createSlice에 초기값과 reducer 값을 넣는다
export const counter = createSlice({
    name: 'counter',
    // 초기값
    initialState : {
        value : 0
    },
    // 실행할 reducer > 객체형태로 익명함수로 할당해서 사용
    reducers : {
        increment : (state) => {
            // 툴킷을 이용하면 상태보존이 되기때문에
            // 값에 바로 접근해서 수정가능
            state.value += 1;
        },
        incrementByAmount : (state, action)=>{
            // 외부에서 값을 들고 오고싶을때 action.payload을 통해 들고옴
            state.value += action.payload
        }
    }
})

// 액션타입을 함수로 만들어서 내보내기
export const {increment, incrementByAmount} = counter.actions

// 디스패치를 따로 내보내줌
export default counter.reducer