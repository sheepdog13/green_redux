import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMemo, deleteMemo } from "../modules/memo";

const Memo = () => {
    const memolist = useSelector((state)=>(state.memo.memolist))
    // input 태그 2개를 만들어서 useState로 title과 text값 받아오기
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    // useDispatch()를 통해서, 메모가 추가한 새로운 리스트를 생성 > memo.js 모듈생성
    const dispatch = useDispatch();
    
    // useCallback을 사용해줄때, 입력값이 있다면 입력값에 따라 바뀔수 있도록추가
    // 매개변수로 받아오는 값은 고정되지않음, 매개변수외의 값은 전부 고정
    const addMemo = useCallback(()=>{dispatch(createMemo({title:title, text:text}))},[dispatch,title,text])
    const deletememo = useCallback((id)=>{dispatch(deleteMemo(id))},[dispatch])
    return (  
        <div>
            <input type="text" onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <input type="text" onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <button onClick={addMemo}>메모</button>
            {
            memolist.map((memo)=>(
                <div>
                    <h3>{memo.id}.{memo.title}</h3>
                    <p>{memo.text}</p>
                    <button onClick={()=>{deletememo(memo.id)}}>삭제</button>
                </div>
            ))
            }
        </div>
    );
}
 
export default Memo;