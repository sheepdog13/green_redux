import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리덕스 프로바이더 추가
import {Provider} from "react-redux"
// store를 만들기위한 createStore 추가: redux
// applyMiddleware를 통해 미들웨어 추가 가능
import { createStore, applyMiddleware } from 'redux';
// store에 추가할 counter state와 action
import counter from './modules/counter';
// rootReducer를 통해 한번에 묶어서 사용가능
import rootReducer, { rootSaga } from './modules';

// 미들웨어를 작성 및 설치 후 추가
//import loggerMiddleware from './lib/loggerMiddleware';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// saga는 미들웨어를 생성해서 연결을 해주어야한다
import createSagaMiddleware from '@redux-saga/core';

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// createStore를 이용하여 store 생성
const store = createStore(rootReducer, applyMiddleware(logger, thunk, sagaMiddleware))
sagaMiddleware.run(rootSaga);// 미들웨어를 추가한후 실행

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
