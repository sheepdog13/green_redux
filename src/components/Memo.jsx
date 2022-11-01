import { useSelector } from "react-redux";

const Memo = () => {
    const memolist = useSelector((state)=>(state.memo.memolist))

    return (  
        <div>
            {memolist[0].title}
        </div>
    );
}
 
export default Memo;