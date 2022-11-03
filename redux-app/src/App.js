import './App.css';
import CounterBox from './components/CounterBox';
import Memo from './components/Memo';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <CounterBox></CounterBox>
      <Memo></Memo>
      <News></News>
    </div>
  );
}

export default App;
