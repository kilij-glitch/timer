import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";


const Controls = ({pausePlayClicked, pausePlay, resetClicked}) => {

 
    return (
        <div className="controls-container">
            {pausePlay ? <FontAwesomeIcon className="icons" id="start-stop" icon={faPause} onClick={pausePlayClicked}/> : <FontAwesomeIcon className="icons" id="start-stop" icon={faPlay} onClick={pausePlayClicked}/>}
            <FontAwesomeIcon className="icons" id="reset" icon={faUndo} onClick={resetClicked} />
        </div>
    )
}

export default Controls
