var myRec = new p5.SpeechRec(goSpeech); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)


myRec.start(); 

function goSpeech(praat) {
    console.log(praat.text)
}

welkom()