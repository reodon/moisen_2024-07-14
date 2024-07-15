const useSpeechRecognition = () => {
  // if (!window.SpeechRecognition) {
  //   return {};
  // }

  const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  const rec = new SpeechRecognition();
  rec.continuous = true;
  rec.interimResults = false;
  rec.lang = "ja-JP" // "en-US"なら英語で認識してくれる。指定がないとブラウザの言語になる

  rec.onresult = function (e) {
    console.log("on result")

    for (var i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) {
        const str = e.results[i][0].transcript;
        console.log('Your speaking: ' + str);
      }
    }
  }

  const start = () => {
    console.log("SpeechRecognition: start");
    rec.start();
  };

  const stop = () => {
    console.log("SpeechRecognition: stop");
    rec.stop();
  };

  return {
    start,
    stop,
  };
};

export {
    useSpeechRecognition,
};
