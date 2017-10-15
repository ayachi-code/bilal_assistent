let voice = new p5.Speech(); 
let speechRec = new p5.SpeechRec(gotSpeech); 
let naam;


function gotSpeech()
{
    
}


function add_settings() {
   naam = document.getElementById("naam").value;
   
   voice.speak("hallo " + naam)
    
}


