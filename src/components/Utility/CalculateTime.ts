
const CalculateTime = (timeInseconds:number):Array<number|string> =>{
let hours:number=Math.floor(timeInseconds/3600);
let minutes:number=Math.floor((timeInseconds - (hours*3600))/60)
let seconds:number = timeInseconds-(hours*3600)-(minutes*60)

const hoursString = hours<10?`0${hours}`:hours;
const minutesString = minutes<10?`0${minutes}`:minutes;
const secondsString = seconds<10?`0${seconds}`:seconds;

return [hoursString,minutesString,secondsString]
}

export default CalculateTime;