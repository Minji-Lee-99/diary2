import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Home from './pages/Home';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader headerText={"app"} leftChild={<MyButton text={"왼쪽 버튼"} onClick={()=> alert("왼쪽 클릭")}/>} rightChild={<MyButton text={"오른쪽 버튼"} onClick={()=> alert("오른쪽 클릭")}/>}/>
        <h2>App.js</h2>
        <MyButton text={"button"} onClick={() => alert("button click")}  type={"positive"}></MyButton>
        <MyButton text={"button"} onClick={() => alert("button click")} type={"sdklfjslkdjflsd"}></MyButton>
        <MyButton text={"button"} onClick={() => alert("button click")}  type={"nagative"}></MyButton>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
