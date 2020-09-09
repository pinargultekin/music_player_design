import React from "react";
import "./styles.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

function PlayBar(){
return <div className="progressbar">
<ProgressBar variant="warning" animated now={45}  />

</div>

}

export default PlayBar;