let voice = new p5.Speech(); 
let speechRec = new p5.SpeechRec(gotSpeech); 
let naam;
let achternaam;


function gotSpeech()
{
    
}


function add_settings() {
   naam = document.getElementById("naam").value;
   achternaam = document.getElementById("achternaam").value;
   
   localStorage.setItem("username", naam);
   localStorage.setItem("achternaam", achternaam);
   
   window.open("public/index.html")
   
    
}

function welkom()
{
    naam = localStorage.getItem("username");
    achternaam = localStorage.getItem("achternaam");
    voice.speak("hallo " + naam + achternaam + " leuk dat je er weer bent")
}


