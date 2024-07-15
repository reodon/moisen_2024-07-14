import { useState, useEffect } from "react";

const useSpeechRecognition = () => {
  // if (!window.SpeechRecognition) {
  //   return {};
  // }
  const [isRecording, setIsRecording] = useState(false);
  // const [text, setText] = useState<string>("");
  // const [transcript, setTranscript] = useState<string>("");
  // const [recognition, setRecognition] = useState<SpeechRecognition | null>(
  //   null
  // );
  const [text, setText] = useState("");
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const recognition = new SpeechRecognition();
      const recognition = new webkitSpeechRecognition();
      recognition.lang = "ja-JP";
      recognition.continuous = true;
      recognition.interimResults = true;
      setRecognition(recognition);
      console.log('useEffect:first');
    }
  }, []);

  useEffect(() => {
    if (!recognition) return;
    if (isRecording) {
      recognition.start();
      console.log('recognition:start');
    } else {
      recognition.stop();
      setText("");
      console.log('recognition:stop');
    }
    console.log('useEffect:second');
  }, [isRecording, recognition]);

  useEffect(() => {
    if (!recognition) return;
    recognition.onresult = (event) => {
      const results = event.results;
      for (let i = event.resultIndex; i < results.length; i++) {
        if (results[i].isFinal) {
          setText((prevText) => prevText + results[i][0].transcript);
          setTranscript("");
        } else {
          setTranscript(results[i][0].transcript);
        }
      }
      console.log('recognition:onresult');
    };
    console.log('useEffect:thrid');
  }, [recognition]);

  return {
    text,
    transcript,
    isRecording,
    setIsRecording,
  };

  // const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  // const rec = new SpeechRecognition();
  // rec.continuous = true;
  // rec.interimResults = false;
  // rec.lang = "ja-JP" // "en-US"なら英語で認識してくれる。指定がないとブラウザの言語になる

  // rec.onresult = function (e) {
  //   console.log("on result")

  //   for (var i = e.resultIndex; i < e.results.length; ++i) {
  //     if (e.results[i].isFinal) {
  //       const str = e.results[i][0].transcript;
  //       console.log('Your speaking: ' + str);
  //     }
  //   }
  // }

  // const start = () => {
  //   console.log("SpeechRecognition: start");
  //   rec.start();
  // };

  // const stop = () => {
  //   console.log("SpeechRecognition: stop");
  //   rec.stop();
  // };

  // return {
  //   start,
  //   stop,
  // };
};

export {
    useSpeechRecognition,
};
