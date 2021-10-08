import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Counters = ({breakLength, sessionLength, clickButton}) => {
    return (
        <div className="counters-container">
            <div className='break'>
                <h2 id="break-label">Break Length</h2>
                <div className="counter-container">
                    <FontAwesomeIcon className="icons" id="break-decrement" icon={faArrowDown} onClick={() => clickButton("break-decrement")} />
                    <div className="counter" id="break-length">{breakLength}</div>
                    <FontAwesomeIcon className="icons" id="break-increment" icon={faArrowUp} onClick={(e) => clickButton("break-increment")}/>
                </div>
            </div>
            <div className='session'>
                <h2 id="session-label">Session Length</h2>
                <div className="counter-container">
                    <FontAwesomeIcon className="icons" id="session-decrement" icon={faArrowDown} onClick={() => clickButton("session-decrement")}/>
                    <div className="counter" id="session-length">{sessionLength}</div>
                    <FontAwesomeIcon className="icons" id="session-increment" icon={faArrowUp} onClick={() => clickButton("session-increment")}/>
                </div>
            </div>
        </div>
    )
}

export default Counters
