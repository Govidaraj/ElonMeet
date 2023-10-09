
import React, { useState, useEffect } from 'react';
import RecordRTC from 'recordrtc';

const ScreenRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  let mediaRecorder;

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    mediaRecorder = new RecordRTC(stream, {
      type: 'video',
      mimeType: 'video/webm',
    });
    mediaRecorder.startRecording();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stopRecording(() => {
      const blob = mediaRecorder.getBlob();
      setRecordedBlob(blob);
    });
    setRecording(false);
  };

  useEffect(() => {
    if (recording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [recording]);

  const handleSave = () => {
    // Send recordedBlob to your Spring Boot server for processing and storage
    // You can use the fetch API or an Axios library for making the HTTP POST request
  };

  return (
    <div>
      {recording ? (
        <button onClick={() => setRecording(false)}>Stop Recording</button>
      ) : (
        <button onClick={() => setRecording(true)}>Start Recording</button>
      )}
      {recordedBlob && (
        <div>
          <video src={URL.createObjectURL(recordedBlob)} controls />
          <button onClick={handleSave}>Save Recording</button>
        </div>
      )}
    </div>
  );
};

export default ScreenRecorder;
