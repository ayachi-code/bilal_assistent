let voice = new p5.Speech(); 
let speechRec = new p5.SpeechRec(gotSpeech); 
let naam;


function gotSpeech()
{
    
}


function add_settings() {
   naam = document.getElementById("naam").value;
   
   localStorage.setItem("username", naam);
    
}

function welkom()
{
    naam = localStorage.getItem("username");
    voice.speak("hallo " + naam + "leuk dat je er weer bent")
}


welkom()