import React,{useState,useEffect} from 'react';
import Timer from './components/Timer/Timer'
import Controls from './components/Controls/Controls'
import CalculateTime from './components/Utility/CalculateTime'
import './App.css';


function App() {
  const [seconds,setSeconds] = useState<number>(0);
  const [timerArray,setTimerArray] = useState<Array<number|string>>([]);

  useEffect(()=>{
    let timer:Array<number|string> = CalculateTime(seconds);
    setTimerArray(timer)
  },[seconds])

  
  return (
    <div className="container">
      <Timer timer={timerArray}/>
      <Controls setSeconds={setSeconds}/> 
    </div>
  );
}

export default App;
