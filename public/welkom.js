var myRec = new p5.SpeechRec(goSpeech); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var user_input = document.getElementById("user_zeg");



myRec.start(); 

function goSpeech(praat) {
    user_input.innerHTML = "U: " + praat.text;
    console.log(praat.text)
    
    
    
}

welkom()