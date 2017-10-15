var speechRec = new p5.SpeechRec(gotSpeech); // speech recognition object (will prompt for mic access)
speechRec.start(); // start listening

function gotSpeech(speech) {
  console.log(speech.text); // log the result
}