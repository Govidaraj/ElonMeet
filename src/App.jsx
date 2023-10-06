import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AgoraUIKit from "agora-react-uikit";

function App() {
  const [count, setCount] = useState(0);
  const [videoCall, setVideoCall] = useState(false);

  const rtcProps = {
    appId: "bfa9e643634048cdb4f7fe76431ce327",
    channel: "VideoTest",
    token:
      "007eJxTYLhWnBv24HetzdI/cx86/5wXX3Zfa9ntdzueCZxc1vF/6cdnCgxJaYmWqWYmxmbGJgYmFskpSSZp5mmp5kARw+RUYyPzn1flUxsCGRn2JdiyMDJAIIjPyRCWmZKaH5JaXMLAAADOJicL",
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
        </div>
      ) : (
        <>
        <div className="content">
          <h1>Hi Welcome to Elon Native System.</h1>
        </div>
        <div>          
          <button
        className="join"
          onClick={() => setVideoCall(true)}
        >
          Join
        </button></div>
      </>
      )}
    </>
  );
}

export default App;

