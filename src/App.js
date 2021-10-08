import {useState, useEffect} from 'react'
import Counters from './components/Counters'
import Timer from './components/Timer'
import Controls from './components/Controls'


function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [pausePlay, setPausePlay] = useState(false);
  const [timerLength, setTimerLength] = useState(sessionLength*60);
  const [sessionBreak, setSessionBreak] = useState(true);

  const handleClick = (id) => {
    const button = document.querySelectorAll(".icons");
    switch(id){
      case "break-decrement" :
        button[0].classList.add("icons-clicked");
        setTimeout(function() {
          button[0].classList.remove("icons-clicked");
        }, 100);
        if(breakLength > 1) {
          setBreakLength(breakLength-1);
        }
        break;
      case "break-increment" :
        button[1].classList.add("icons-clicked");
        setTimeout(function() {
          button[1].classList.remove("icons-clicked");
        }, 100);
        if(breakLength < 60) {
          setBreakLength(breakLength+1);
        } 
        break;
      case "session-decrement" :
        button[2].classList.add("icons-clicked");
        setTimeout(function() {
          button[2].classList.remove("icons-clicked");
        }, 100);
        if(sessionLength > 1) {
          setSessionLength(sessionLength-1);
        }
        break;
      case "session-increment" :
        button[3].classList.add("icons-clicked");
        setTimeout(function() {
          button[3].classList.remove("icons-clicked");
        }, 100);
        if(sessionLength < 60) {
          setSessionLength(sessionLength+1);
        } 
        break;
      default  :
        break;
    }
  }


  useEffect(() => {
    setTimerLength(sessionLength*60);
  },[sessionLength]);


  useEffect(() => {
    if(timerLength === 0 && sessionBreak === true) {
      setSessionBreak(false);
      setTimerLength(breakLength*60);
      const audio = document.getElementsByTagName("audio")[0];
      audio.play();
    }
    else if(timerLength === 0 && sessionBreak === false) {
      setSessionBreak(true);
      setTimerLength(sessionLength*60);
      const audio = document.getElementsByTagName("audio")[0];
      audio.play();
    }
  }, [timerLength, breakLength, sessionLength, sessionBreak])


  useEffect(() => {
    let interval = null;
    if(pausePlay) {
      interval = setInterval(() => {
        setTimerLength(prevTime => prevTime-1);
      }, 1000);
    }
    else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [pausePlay]);


  const handleReset = () => {
    const button = document.querySelectorAll(".icons");
    button[5].classList.add("icons-clicked");
    setTimeout(function() {
      button[5].classList.remove("icons-clicked");
    }, 100);
    setBreakLength(5);
    setSessionLength(25);
    setPausePlay(false);
    setTimerLength(sessionLength*60);
    setSessionBreak(true);
  }


  return (
    <div className="App">
      <div className="first-half">
        <header>
          <h1 id="title">25 + 5 Clock</h1>
          <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </header>
        <Counters breakLength={breakLength} sessionLength={sessionLength} clickButton={handleClick}/>
      </div>
      <div className="second-half">
        <Timer time={sessionLength} timerLength={timerLength} sessionBreak={sessionBreak}/>
        <Controls pausePlayClicked={() => setPausePlay(!pausePlay)} pausePlay={pausePlay} resetClicked={handleReset} />
      </div>
    </div>
  );
}

export default App;
