'use client';

import { useSpeechRecognition } from "@/app/_/hooks/useSpeechRecognition";

export default function SpeechRecPage() {
  const {
    text,
    transcript,
    isRecording,
    setIsRecording,
  } = useSpeechRecognition();

  return (<>
    <main className="flex min-h-screen flex-col gap-4 p-24">
      <button className="btn" onClick={() => setIsRecording(prev => !prev)}>{isRecording ? 'Stop' : 'Start'}</button>
      <div>
        <p>transcript: {transcript}</p>
        <p>text: {text}</p>
      </div>
    </main>
  </>);
}
