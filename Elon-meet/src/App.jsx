 import { useState } from "react";
 import "./App.css";
 import AgoraUIKit from "agora-react-uikit";
 import VideoControls from "./VideoControls";

 function App() {
   const [count, setCount] = useState(0);
   const [videoCall, setVideoCall] = useState(false);

   const rtcProps = {
     appId: "3aaa5cb496db4e29905e4d7b14de13a4",
    channel: "VideoTest",
    token:
      "007eJxTYDDszOj5PcvkLGtTe2SaqNK+UD61BeIxZ6Oq3tgpXmwX2qrAYJyYmGianGRiaZaSZJJqZGlpYJpqkmKeZGiSkmponGiyYFJTakMgI4N0xmdmRgYIBPE5GcIyU1LzQ1KLSxgYAGLzH+A=",
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
           {/* <VideoControls channelParameters={{ localVideoTrack, screenTrack }} /> */}
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

// import React, { useState, useEffect } from "react";
// import RecordRTC from "recordrtc";
// import AgoraUIKit from "agora-react-uikit";

// const VideoCallWithRecording = () => {
//   const [videoCall, setVideoCall] = useState(false);
//   const [recording, setRecording] = useState(false);
//   const [recordedBlob, setRecordedBlob] = useState(null);
//   let mediaRecorder;

//   // Your AgoraRTC props and callbacks
//   const rtcProps = {
//     appId: "3aaa5cb496db4e29905e4d7b14de13a4",
//     channel: "VideoTest",
//     token:
//       "007eJxTYDDszOj5PcvkLGtTe2SaqNK+UD61BeIxZ6Oq3tgpXmwX2qrAYJyYmGianGRiaZaSZJJqZGlpYJpqkmKeZGiSkmponGiyYFJTakMgI4N0xmdmRgYIBPE5GcIyU1LzQ1KLSxgYAGLzH+A=",
//   };

//   const callbacks = {
//     EndCall: () => {
//       setVideoCall(false);
//       // Stop recording if it's in progress
//       if (recording) {
//         setRecording(false);
//         stopRecording();
//       }
//     },
//   };

//   const startRecording = async () => {
//     // const screenConstraints = {
//     //   video: {
//     //     mediaSource: "screen", // Use 'screen' to capture the entire screen
//     //   },
//     //   audio: true, // You can enable audio if needed
//     // };
//     const stream = await navigator.mediaDevices.getDisplayMedia({
//       video: true,
//     });
//     mediaRecorder = new RecordRTC(stream, {
//       type: "video",
//       mimeType: "video/webm",
//     });
//     mediaRecorder.startRecording();
//     setRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorder.stopRecording(() => {
//       const blob = mediaRecorder.getBlob();
//       setRecordedBlob(blob);
//     });
//     setRecording(false);
//   };

//   const handleSave = () => {
//     // Assuming 'recordedBlob' contains the recorded video blob
//     const formData = new FormData();
//     formData.append('file', recordedBlob);

//     fetch('http://localhost:8433/api/videos/upload', {
//         method: 'POST',
//         body: formData,
//     })
//     .then(response => response.text())
//     .then(data => {
//         // Handle the response from the server
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error(error);
//     });
// };



//   return (
//     <div>
//       {videoCall ? (
//         <div style={{ display: "flex", width: "90vw", height: "85vh" }}>
//           <AgoraUIKit
//             styleProps={{
//               UIKitContainer: {
//                 width: "120vw",
//                 height: "680px",
//                 backgroundColor: "#ccd9ff",
//               },
//               maxViewContainer: { height: "650px" },
//               localBtnContainer: {
//                 backgroundColor: "#0f3995",
//               },
//               iconSize: "15px",
//             }}
//             rtcProps={rtcProps}
//             callbacks={callbacks}
//           />
//           {recording ? (
//             <button onClick={stopRecording}>Stop Recording</button>
//           ) : (
//             <button onClick={startRecording}>Start Recording</button>
//           )}
//           {recordedBlob && (
//             <div>
//               <video src={URL.createObjectURL(recordedBlob)} controls />
//               <button onClick={handleSave}>Save Recording</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <>
//           <div className="content">
//             <h1>Welcome to Elon Native System.</h1>
//           </div>
//           <div>
//             <button className="join" onClick={() => setVideoCall(true)}>
//               Join Video Call
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default VideoCallWithRecording;
