import React, { useState } from "react";

const App = () => {
  const [videoName, setVideoName] = useState(""); 

  const handleInputChange = (e) => {
    setVideoName(e.target.value); 
  };

  const handleButtonClick = (e) => {
    setVideoName(e.target.innerText);
  };

  return (
    <div className="Mainontainer">
      <div className="container">
        <h1>Video Streaming App</h1>
        <div className="top">
          <form>
            <div className="formTop">Video Name:</div>
            <div className="formBottom">
              <input
                type="text"
                id="videoName"
                value={videoName}
                onChange={handleInputChange}
                placeholder="Enter video index between 0-2"
              />
            </div>
          </form>
        </div>
        <div className="btns">
          <div className="button">
            <div className="btn" onClick={handleButtonClick}>0</div>
            <div className="btn" onClick={handleButtonClick}>1</div>
            <div className="btn" onClick={handleButtonClick}>2</div>
          </div>
        </div>
        <div className="bottom">
          {videoName && (
            <div>
              <h3>Now Streaming: {videoName}.mp4</h3>
              <div className="video">
                <video
                  src={`https://node-stream-backend.vercel.app/video/${videoName}`}
                  controls
                  width="600"
                >
                  Video
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
