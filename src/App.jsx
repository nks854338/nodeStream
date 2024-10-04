import React, { useState } from "react";

const App = () => {
  const [videoName, setVideoName] = useState(""); // Track the input value

  // Handle input change from typing in the input box
  const handleInputChange = (e) => {
    setVideoName(e.target.value); // Update video name from the input
  };

  // Handle click event on any of the buttons
  const handleButtonClick = (e) => {
    setVideoName(e.target.innerText); // Set input value to the text inside the clicked button
  };

  return (
    <div className="Mainontainer">
      <div className="container">
        <h1>Video Streaming App</h1>
        <div className="top">
          {/* Input Form */}
          <form>
            <div className="formTop">Video Name:</div>
            <div className="formBottom">
              <input
                type="text"
                id="videoName"
                value={videoName}
                onChange={handleInputChange}
                placeholder="Enter video name"
              />
            </div>
          </form>
        </div>
        <div className="btns">
          <div className="button">
            {/* Each button has an onClick event to update the input field */}
            <div className="btn" onClick={handleButtonClick}>MusicApp</div>
            <div className="btn" onClick={handleButtonClick}>nodejs</div>
            <div className="btn" onClick={handleButtonClick}>multer</div>
          </div>
        </div>
        <div className="bottom">
          {videoName && (
            <div>
              <h3>Now Streaming: {videoName}.mp4</h3>
              <div className="video">
                <video
                  src={`http://localhost:5000/video/${videoName}`}
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
