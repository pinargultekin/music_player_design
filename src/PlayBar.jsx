import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./styles.css";

function PlayBar(){
return <div className="progressbar">
<ProgressBar variant="warning" animated now={45}  />

</div>

}

export default PlayBar;