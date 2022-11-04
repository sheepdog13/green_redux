import {put, takeEvery} from 'redux-saga/effects'
// 초기 state선언
// API로 값을 가져오는 경우에 데이터를 가져오는 속도가 느릴수 있으므로 loading을 작성
const initalState = {
    loading : false,
    news : null
}
// saga를 통해 비동기 함수 작성 - 전부 제너레이터함수
// saga에서 바로 비동기(async를 붙일수 없으므로 안이나 밖에 따로 함수생성)
function* getNewsSaga() {
    yield put({type:'startload'})
    async function getData() {
        const reponse = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
        const data = await reponse.json();
        return data;
    }
    // saga에서 제공해주는 call : call(getData) 작성 동일한 결과
    const data = yield getData();
    yield put({type:"getNews",payload: data.articles});
    yield put({type:"endLoad"})
}

// 모든 사가를 연결하기위한 함수
export function* newsSaga () {
    yield takeEvery("newsSaga",getNewsSaga)
}

// 사가를 실행할 액션함수
export const getnewsSaga = () => ({type:"newsSaga"})

// thunk를 통해서 값을 받아오는 액션함수 작성
// thunk의 내용이 비동기 함수임을 알림
export const getNews = () => async (dispatch) => {
    dispatch({type:"startLoad"});
    const reponse = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a")
    const body = await reponse.json();
    if (body.status == 'ok') {
        dispatch({type:"getNews", payload : body.articles})
    }
    dispatch({type:"endLoad"});
}

// 리듀서 함수 작성
const newsSagaReducer = (state = initalState, action) => {
    switch(action.type) {
        case "getNews":
        // 값이 다 들어왔다고 생각하고 작성
        return {
            ...state,
            news : action.payload 
        }
        case "startLoad":
            return {...state, loading: true};
        case "endLoad":
            return {...state, loading: false}
        default:
            return state
    }
}

export default newsSagaReducer;