import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './modules/counter'

// redux에서 createStore와 동일한 역할
// + 모듈이 따로 있다면 combine을 통해서 묶어줘야하지만, 툴킷에서 기능 통합
export default configureStore({
    reducer : {
        counter : counterReducer,
    },
})