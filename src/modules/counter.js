// useReducer의 형식과 유사(초기값, 리듀서 함수)
// 초기값
const initalState = {
    number : 0,
    changeNum : 1
}

// dispatch에 들어갈 {type:"액션"} 객체를 함수로 만들어서 내보내줌
export const increase = ()=> ({type:"increase"}) // 리턴값 객체
export const decrease = ()=> ({type:"decrease"}) // 리턴값 객체
            // 화살표함수도 동일하게 매개변수의 값을 받아올 수 있다
export const change = (value)=> ({type:"change", payload : value})

// 리듀서 함수
function counter(state = initalState, action) {
    switch(action.type) {
        case "increase":
            return {...state, number : state.number+Number(state.changeNum)};
        case "decrease":
            return {...state, number : state.number-state.changeNum};
        case "change":
            return {...state, changeNum : action.payload}
        default :
            return state;
    }
}

export default counter;