import React,{useState} from 'react'
import './Controls.css'
type Props ={
    setSeconds:Function
}
export default function Controls(props:Props) {
    const {setSeconds} = props;
    const[intervalId,setIntervalId]= useState<number>(0);
    const[disabled,setDisabled] = useState<boolean>(false);
  

    const startTimer = ()=>{
    let interval:any = setInterval(()=>{
        setSeconds((previousState:number)=>
        previousState+1
        )},1000)
        setIntervalId(interval);
        setDisabled(true);
    };
    const stopTimer = ()=>{
    clearInterval(intervalId);
    setDisabled(false);
    }
    const resetTimer = ()=>{
        clearInterval(intervalId);
        setSeconds(0);
    }

   return (
       <div className='controls-container'>
            <button disabled={disabled} className='btn' onClick={startTimer}>Start</button>
            <button className='btn' onClick={stopTimer}>Stop</button>
            <button className='btn' onClick={resetTimer}>Reset</button>
       </div>
    )
}
