// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import AgoraUIKit from "agora-react-uikit";

// function App() {
//   const [count, setCount] = useState(0);
//   const [videoCall, setVideoCall] = useState(false);

//   const rtcProps = {
//     appId: "bfa9e643634048cdb4f7fe76431ce327",
//     channel: "VideoTest",
//     token:
//       "007eJxTYOjXOzHtjvLJztDJWfuPLU+KUlv0N5thPZeVkp747T3nJ9srMCSlJVqmmpkYmxmbGJhYJKckmaSZp6WaA0UMk1ONjcxvqYqmNgQyMiTYHmViZIBAEJ+TISwzJTU/JLW4hIEBAN9HIJk=",
//   };

//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };

//   return (
//     <>
//       {videoCall ? (
//         <div style={{ display: "flex", width: "90vw", height: "85vh" }}>
//           <AgoraUIKit
//           // screenShareConfig={{
//           //   enabled: true,
//           //   extensionId: "0.1.0", 
//           // }}
//             styleProps={{UIKitContainer:{width:'100vw',height:'550px',backgroundColor:"#ccd9ff"},
//             maxViewContainer:{height:'500px'},
//             // usernameText:{},
//               localBtnContainer: {
//                 backgroundColor:"#0f3995"
//               },
//               iconSize: "15px"
//             }}
//             rtcProps={rtcProps}
//             callbacks={callbacks}
//           />
//         </div>
//       ) : (
//         <button
//         className="join"
//           onClick={() => setVideoCall(true)}
//           // style={{ backgroundColor: "green", width: "200px" ,color:"white"}} // Change 'green' to the color you want
//         >
//           Join
//         </button>
//       )}
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import "./App.css";

function App() {
  const [rooms, setRooms] = useState([
    { name: "Room 1", channel: "VideoTest", token: "007eJxTYOjXOzHtjvLJztDJWfuPLU+KUlv0N5thPZeVkp747T3nJ9srMCSlJVqmmpkYmxmbGJhYJKckmaSZp6WaA0UMk1ONjcxvqYqmNgQyMiTYHmViZIBAEJ+TISwzJTU/JLW4hIEBAN9HIJk=" },
    { name: "Room 2", channel: "VideoTest1", token: "007eJxTYCgU3250wfyARdXUu5Xv501lK+SYMe/TrTtf0zIKTJNqMj4pMBgnJiaaJieZWJqlJJmkGllaGpimmqSYJxmapKQaGieaTPcSTW0IZGRg0ediYIRCEJ+LISwzJTU/JLW4xJCBAQBcSiFf" },
    // Add more rooms as needed
  ]);

  const [activeRoom, setActiveRoom] = useState(null);
  const [userName, setUserName] = useState(""); // State to store the user's name

  const joinRoom = (room) => {
    setActiveRoom(room);
  };

  const leaveRoom = () => {
    setActiveRoom(null);
  };

  const rtcProps = activeRoom
    ? {
        appId: "bfa9e643634048cdb4f7fe76431ce327",
        channel: activeRoom.channel,
        token: activeRoom.token,
      }
    : null;

const callbacks = {
  EndCall: () => leaveRoom(),
};

return (
  <div className="app">
    <h1>Video Chat Rooms</h1>
    {activeRoom ? (
      <div className="video-container">
       <div className="username">{userName}</div>
        <AgoraUIKit
          styleProps={{
            UIKitContainer: {
              width: "100vw",
              height: "85vh",
              backgroundColor: "#ccd9ff",

            },
            maxViewContainer: { height: "500px" },
            localBtnContainer: {
              backgroundColor: "#0f3995",
            },
            iconSize: "15px",
          }}
          rtcProps={rtcProps}
          callbacks={callbacks}
          userName={userName} // Pass the user's name to AgoraUIKit
        />
        <button className="join" onClick={() => leaveRoom()}>
          Leave Room
        </button>
      </div>
    ) : (
      <div className="room-list">
        <h2>Select a Room to Join</h2>
        {/* Allow users to enter their name */}
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <ul>
          {rooms.map((room) => (
            <li key={room.channel}>
              <button className="join" onClick={() => joinRoom(room)}>
                {room.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
          }

export default App;