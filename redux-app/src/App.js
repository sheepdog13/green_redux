import './App.css';
import CounterBox from './components/CounterBox';
import Memo from './components/Memo';
import News from './components/News';
import NewsSagaBox from './components/NewsSagaBox';

function App() {
  return (
    <div className="App">
      <CounterBox></CounterBox>
      <Memo></Memo>
      <News></News>
      <NewsSagaBox></NewsSagaBox>
    </div>
  );
}

export default App;
