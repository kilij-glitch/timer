const Timer = ({time, timerLength, sessionBreak}) => {

    let min = Math.floor(timerLength/60);
    let sec = timerLength%60;
    min = min<10 ? "0"+min : min;
    sec = sec<10 ? "0"+sec : sec;

    return (
        <div className='timer-container'>
            <h2 id="timer-label">{sessionBreak ? "Session" : "Break"}</h2>
            <div id="time-left">{min+":"+sec}</div>
        </div>
    )
}

export default Timer
