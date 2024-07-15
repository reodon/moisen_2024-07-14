'use client';

import { useSpeechRecognition } from "@/app/_/hooks/useSpeechRecognition";

export default function SpeechRecPage() {
  const {
    start: startSpeechRec,
    stop: stopSpeechRec,
  } = useSpeechRecognition();

  return (<>
    <main className="flex min-h-screen flex-col gap-4 p-24">
      <button className="btn" onClick={() => startSpeechRec()}>Start</button>
      <button className="btn" onClick={() => stopSpeechRec()}>Stop</button>
    </main>
  </>);
}
