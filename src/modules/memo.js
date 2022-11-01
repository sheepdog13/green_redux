// 메모배열 저장
// 초기값
const initalState = {
    memolist : [
        {   
            id : 1,
            title: "제목",
            text:"내용"
        },
    ]
}

// 리듀서값 작성
function memo(state=initalState, action) {
    switch(action.type){
        default:
            return state;
    }
}

export default memo;