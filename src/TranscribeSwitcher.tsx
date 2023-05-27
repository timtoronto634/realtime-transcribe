import React, { useState } from 'react';
import './App.css';
import RealTimeTranscription from './Recorder';
import {Dropdown} from './Dropdown'


export function TrascribeSwitcher() {
  const [isChrome, setIsChrome] = useState<boolean>(true)

  return (
    <div>
      <Dropdown isChrome={isChrome} setIsChrome={setIsChrome} />
    {isChrome ? 
      <RealTimeTranscription />
      : null}
    </div>
  )
}
