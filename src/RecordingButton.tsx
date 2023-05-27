import React, { useState } from "react";

interface RecordingButtonProps {
  startRecord: ()=>void,
  endRecord: ()=>void,
}

export function RecordingButton({startRecord, endRecord}: RecordingButtonProps) {
  const [recording, setRecording] = useState(false)
  const handleClick = () => {
    if (recording) {
      setRecording(false)
      endRecord()
    } else {
      setRecording(true)
      startRecord()
    }
  }

  return (
  <button
    onClick={handleClick}
    className={
      `rounded-full border-none focus:outline-none transition-all duration-500 text-sm
      ${recording ? 'bg-red-600 w-20 h-20 animate-pulse' : 'bg-gray-600 w-16 h-16'}`}
    >
      {recording ? "文字おこし中" : "スタート"}
  </button>
  )

}