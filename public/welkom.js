var myRec = new p5.SpeechRec(goSpeech); // new P5.SpeechRec object
let voice2 = new p5.Speech(); 
myRec.continuous = true; 
myRec.start(); 

var d = new Date();
var n = d.toLocaleTimeString();

let naam2;
let achternaam2;

var user_input = document.getElementById("user_zeg");
var bot_input = document.getElementById("bot_zeg");

var myArray = ['https://www.google.com', 'https://www.hetmml.nl', 'https://ayachi-code.github.io'];    
var item = myArray[(Math.random()*myArray.length)|0];
console.log(item);


var woorden = {
    hallo: "goede dag",
}


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function goSpeech(praat) {
    
    naam2 = localStorage.getItem("username");
    achternaam2 = localStorage.getItem("achternaam");
    let bilal = praat.text;
    
    user_input.innerHTML = "U: " + bilal;
    console.log(bilal);
    
if (bilal == "hallo") {
    voice2.speak(woorden.hallo + naam2 + achternaam2)
    //bot_input.innerHTML = "bot: " + woorden.hallo;
} 


if (bilal == "Hoe laat is het" || bilal == "hoe laat is het") {
    voice2.speak("het is " + n);
    //bot_input.innerHTML = "bot: " + "het is " + n;
} 

if (bilal == "zag een willekeurig nummer" || "zeg een willekeurig nummer") {
    let nummer = Math.floor((Math.random() * 10) + 1);
    voice2.speak(nummer);
    //bot_input.innerHTML = "bot: " + nummer;
   
} 

if (bilal == "Random site" || "random site") {
    voice2.speak("oke ik open " + item);
    sleep(2000);
    window.open(item);
    
}
    
    
    
}

welkom()



