let x = 0;
let y = 0;
let desenharCirculo = "";
let desenharQuadrado = "";
let desenharRetangulo = "";

//API de reconhecimento de fala
var SpeechRecognition = window.webkitSpeechRecognition;

//criando um novo reconhecimento de fala e armzenando na variável
var recognition = new SpeechRecognition();

function start() {
  
}

recognition.onresult = function (event) {

  console.log(event);

  // acessando o reconhecimento com maior precisão e armazenando na variável
  var content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;

  if (content == "círculo") {
    x = Math.floor(Math.random() * 900);
    
    document.getElementById("status").innerHTML = "Desenhando um círculo.";
    desenharCirculo = "set";
  }
  if (content == "retângulo") {
    
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Desenhando um retângulo.";
    desenharRetangulo = "set";
  }
  if (content == "quadrado") {
    
    document.getElementById("status").innerHTML = "Desenhando um quadrado.";
    desenharQuadrado = "set";
  }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if (desenharCirculo == "set") {
   
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
   
    
    document.getElementById("status").innerHTML = "Círculo desenhado. ";
    desenharCirculo = "";
  }

  if (desenharRetangulo == "set") {
    larguraRetangulo = Math.floor(Math.random() * 100);
    alturaRetangulo = Math.floor(Math.random() * 150);
   
    fill(r,g,b);
    
    document.getElementById("status").innerHTML = "Retângulo desenhado. ";
    desenharRetangulo = "";
  }

  if (desenharQuadrado == "set") {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
    
    document.getElementById("status").innerHTML = "Quadrado desenhado. ";
    desenharQuadrado = "";
  }

}








