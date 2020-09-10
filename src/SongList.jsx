import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlus,
  faEllipsisH,
  faPlay,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import Photo from "./Photo";

function SongList() {
  return (
    <div className="song-list">
      <div className="song-list-top">
        <div className="album-photo"><Photo/></div>
        <h5>
          Flower Boy <br /> Tyler, The Creator
        </h5>
      </div>
      <div className="button-group">
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button>
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>
      <hr />
      <div className="songs">
        <div className="song">
          <div className="songName">
            <h6>Foreword</h6>
            <br />
            <h6>feat. Rex Orange Country</h6>
          </div>
          <div className="play-pause">
            <button className="play">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
        <div className="song songPlay">
          <div className="songName">
            <h6>Where This Flower Blooms</h6>
            <br />
            <h6>feat. Frank Ocean</h6>
          </div>
          <div className="play-pause">
            <button className="play">
              <FontAwesomeIcon icon={faPause} />
            </button>
          </div>
        </div>
        <div className="song">
          <div className="songName">
            <h6>Sometimes...</h6>
            <br />
            <h6> </h6>
          </div>
          <div className="play-pause">
            <button className="play">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
        <div className="song">
          <div className="songName">
            <h6>See You Again</h6>
            <br />
            <h6>feat. Kali Uchis</h6>
          </div>
          <div className="play-pause">
            <button className="play">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
        <div className="song">
          <div className="songName">
            <h6>Who Dat Boy</h6>
            <br />
            <h6>feat. A$AP Rocky</h6>
          </div>
          <div className="play-pause">
            <button className="play">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>       
      </div>
    </div>
  );
}

export default SongList;
