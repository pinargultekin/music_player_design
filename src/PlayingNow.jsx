import React from "react";
import "./styles.css";
import Photo from "./Photo";
import SongName from "./SongName";
import PlayBar from "./PlayBar";
// import Buttons from "./Buttons";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPause, faForward, faBackward, faArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons';

function PlayingNow() {
  return (
    <div>
      <div className="button-group-top">
        <Button><FontAwesomeIcon icon={faArrowLeft} /></Button>
        <p>Playing Now</p>
        <Button><FontAwesomeIcon icon={faBars} /></Button>
      </div>
      <Photo />
      <SongName />
      <PlayBar />
      <div className="button-group-bottom">
        <Button><FontAwesomeIcon icon={faBackward} /></Button>
        <Button><FontAwesomeIcon icon={faPause} /></Button>
        <Button><FontAwesomeIcon icon={faForward} /></Button>
      </div>
    </div>
  );
}

export default PlayingNow;
