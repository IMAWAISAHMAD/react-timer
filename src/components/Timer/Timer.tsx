import React from 'react'
import './Timer.css';

type Props = {
    timer : Array<number|string>
}

export default function Timer(props:Props) {
    const{timer} = props;

    return (
        <div className='timer-container'>
            <p>{timer[0]}</p>
            <span>:</span>
            <p>{timer[1]}</p>
            <span>:</span>
            <p>{timer[2]}</p>
        </div>
    )
}
