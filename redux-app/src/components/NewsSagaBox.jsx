import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getnewsSaga } from "../modules/newsSaga";

const NewsSagaBox = () => {
    const loading = useSelector((state)=>state.newsSagaReducer.loading)
    const news = useSelector((state)=>state.newsSagaReducer.news)
    const dispatch = useDispatch();

    // 마운트되자마자 값 가져오기
    useEffect(()=>{
    }, [])
    return (  
        <div>
            <h1>뉴스를 출력할 공간입니다</h1>
            { 
            // 값을 불러올때 동안 로딩중을 알림
            loading && <p>로딩중입니다</p>
            }
            {
                // loading이 false이고 news가 값이 있을때 출력
                !loading && news &&  (news.map((article)=>(
                    <div>{article.title}</div>
                )))
            }
            <button onClick={()=>{dispatch(getnewsSaga())}}>뉴스 가져오기</button>
        </div>
    );
}
 
export default NewsSagaBox;