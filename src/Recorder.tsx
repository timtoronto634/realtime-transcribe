import React, { useState, useEffect } from 'react';
import './Recorder.css';

// Define SpeechRecognition type
const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

interface Props {}

const RealTimeTranscription: React.FC<Props> = () => {
  const [transcript, setTranscript] = useState<string>('スタートを押して話してみてください');
  const [recognition, setRecognition] = useState<typeof SpeechRecognition | null>(null);

  useEffect(() => {
    if (!SpeechRecognition) {
      alert('Your browser does not support the Web Speech API.');
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = 'ja-JP';

    recognitionInstance.onresult = (event: any) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          const newTranscript = event.results[i][0].transcript;
          setTranscript((prevTranscript) => prevTranscript + '\n' + newTranscript);
        }
      }
    };

    recognitionInstance.onerror = (event: any) => {
      console.error('Error:', event.error);
    };

    setRecognition(recognitionInstance);

    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop();
      }
    };
  }, []);

  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const resetTranscript = () => {
    if (recognition) {
      setTranscript('');
    }
  };

  return (
    <div>
      <h2>Real-time Transcription</h2>
      <div className='transcript'>
        {transcript.split('\n').reverse().map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <button onClick={startRecognition}>スタート</button>
      <button onClick={stopRecognition}>ストップ</button>
      <button onClick={resetTranscript}>リセット</button>
    </div>
  );
};

export default RealTimeTranscription;
