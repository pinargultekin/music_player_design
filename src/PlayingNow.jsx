import React from "react";
import Photo from "./Photo";
import SongName from "./SongName";
import PlayBar from "./PlayBar";
// import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPause, faForward, faBackward, faArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
function PlayingNow() {
  return (
    <div>
      <div className="button-group-top">
        <button><FontAwesomeIcon icon={faArrowLeft} /></button>
        <p>Playing Now</p>
        <button><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <Photo />
      <SongName />
      <PlayBar />
      <div className="button-group-bottom">
        <button><FontAwesomeIcon icon={faBackward} /></button>
        <button><FontAwesomeIcon icon={faPause} /></button>
        <button><FontAwesomeIcon icon={faForward} /></button>
      </div>
    </div>
  );
}

export default PlayingNow;
