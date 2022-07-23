import './App.css';
import { useState } from 'react';
import Content from './useEffect/Content';
import Resize from './useEffect/Resize';
import TimerFunction from './useEffect/TimerFunction';
import InputImage from './useEffect/InputImage';
import EmitComment from './useEffect/EmitComment';
import CountTo3 from './useLayoutEffect/countTo3';
import StartStop from './useRef/StartStop';
import Memo from './memo/memo';
import AddProduct from './useMemo/addProduct';
import AppContext from './useContext/AppContext';
import AppImperative from './useImparative/AppImperative';


function App() {
  const [show, setShow] = useState(false)
  const [resizeShow, setResizeShow] = useState(false)
  const [timerFunction, setTimerFunction] = useState(false)
  const [inputImage, setInputImage] = useState(false)
  const [emitComment, setEmitComment] = useState(false)
  const [countTo3, setCountTo3] = useState(false)
  const [startStop, setStartStop] = useState(false)
  const [memo, setMemo] = useState(false)
  const [addProduct, setAddProduct] = useState(false)
  const [addAppContext, setAddAppContext] = useState(false)
  const [addAppImperative, setAddAppImperative] = useState(false)


  return (
    <div className="App">
      <div style={{ margin: 10 }}>
        <button onClick={() => setShow(!show)}>Content</button>
        {show && <Content />}
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={() => setResizeShow(!resizeShow)}>Resize</button>
        {resizeShow && <Resize />}
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={() => setTimerFunction(!timerFunction)}>TimerFunction</button>
        {timerFunction && <TimerFunction />}
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={() => setInputImage(!inputImage)}>InputImage</button>
        {inputImage && <InputImage />}
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={() => setEmitComment(!emitComment)}>EmitComment</button>
        {emitComment && <EmitComment />}
      </div>
      {/* useLayoutEffect */}
      <div style={{ margin: 10 }}>
        <button onClick={() => setCountTo3(!countTo3)}>CountTo3</button>
        {countTo3 && <CountTo3 />}
      </div>
      {/* useRef */}
      <div style={{ margin: 10 }}>
        <button onClick={() => setStartStop(!startStop)}>StartStop</button>
        {startStop && <StartStop />}
      </div>
      {/* memo */}
      <div style={{ margin: 10 }}>
        <button onClick={() => setMemo(!memo)}>Memo</button>
        {memo && <Memo />}
      </div>
      {/* useMemo */}
      <div style={{ margin: 10 }}>
        <button onClick={() => setAddProduct(!addProduct)}>AddProduct</button>
        {addProduct && <AddProduct />}
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={() => setAddAppContext(!addAppContext)}>AppContext</button>
        {addAppContext && <AppContext />}
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={() => setAddAppImperative(!addAppImperative)}>AppImperative</button>
        {addAppImperative && <AppImperative />}
      </div>
      <div style={{ height: 1000 }}></div>
    </div>
  );
}

export default App;
