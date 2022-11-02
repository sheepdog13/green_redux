// 메모배열 저장
// 초기값
const initalState = {
    memolist : [
        {   
            id : 1,
            title: "제목",
            text:"내용"
        },
    ],
    id : 2
}
// 액션타입을 함수로 만들어서 내보내줌
// addmemo에서 받아오는 매개변수memo는 {title:"",text:""}의 형태로 사용할 예정
export const createMemo = (memo)=>({type : "createMemo", payload: memo})
// addmemo에서 받아오는 매개변수 id는 3과 같은 숫자값을 사용할 예정
export const deleteMemo = (id)=> ({type: "deleteMemo",payload:id})
// 리듀서값 작성
function memo(state=initalState, action) {
    switch(action.type){
        case "createMemo":
            // 새로운 메모생성
            const newMemo = {
                id : state.id,
                title :action.payload.title,
                text :action.payload.text
            }
            // 새로운 메모를 가지는 리스트
            const newMemoList = state.memolist.concat(newMemo)
            return {...state, memolist : newMemoList, id : state.id+1}
        case "deleteMemo":
            // memo id를 가져와서, id값을 가진 메모를 제외하고 새로운 메모리스트생성
            // payload:3 (id값 하나만 들어가 있음)
            const deletMemoList= state.memolist.filter((memo)=>memo.id != action.payload)
            return {...state, memolist:deletMemoList}
        default:
            return state;
    }
}

export default memo;