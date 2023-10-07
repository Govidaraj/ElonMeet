import { useState } from "react";
import "./App.css";
import AgoraUIKit from "agora-react-uikit";
import VideoControls from "./VideoControls"; 

function App() {
  const [count, setCount] = useState(0);
  const [videoCall, setVideoCall] = useState(false);

  const rtcProps = {
    appId: "bfa9e643634048cdb4f7fe76431ce327",
    channel: "VideoTest",
    token:
      "007eJxTYFCanRFxca3nNqvKxUublfSP6LgnL7CR/Ls/UW0Gm9EXIyUFhqS0RMtUMxNjM2MTAxOL5JQkkzTztFRzoIhhcqqxkXl5smJqQyAjw4KPF5gYGSAQxOdkCMtMSc0PSS0uYWAAAGBjH8o=",
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return (
    <>
      {videoCall ? (
        <div style={{ display: "flex", width: "90vw", height: "85vh" }}>
          <AgoraUIKit
          
            styleProps={{UIKitContainer:{width:'120vw',height:'680px',backgroundColor:"#ccd9ff"},
            maxViewContainer:{height:'650px'},
              localBtnContainer: {
                backgroundColor:"#0f3995"
              },
              iconSize: "15px"
            }}
            rtcProps={rtcProps}
            callbacks={callbacks}
          />
          {/* Render VideoControls component */}
          <VideoControls channelParameters={{ localVideoTrack, screenTrack }} />
        </div>
      ) : (
        <>
          <div className="content">
            <h1>Welcome to Elon Native System.</h1>
          </div>
          <div>
            <button className="join" onClick={() => setVideoCall(true)}>
              Join
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;

