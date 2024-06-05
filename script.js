const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector("caixa-perguntas");
const caixaAlternativas= document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [ 
  {  
    enunciado " ";
    alternativas: [ 
      "resposta 1"
      "resposta 2"
   ]
  }

  {  
      enunciado "pergunta 2";
      alternativas: [ 
        "resposta 1"
        "resposta 2"
     ]
    } {

    
      enunciado "pergunta 3";
      alternativas: [ 
        "resposta 1"
        "resposta 2"
     ]
  } 
    
{  
    enunciado "pergunta 4";
      alternativas: [ 
        "resposta 1"
        "resposta 2"
     ]
}

];

let atual = 1;
let perguntaAtual;

function mostraAlternativas() { 

}

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.txtContent + perguntaAtual.enunciado;
function mostraAlternativas() { 
  for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas =document.createElement("button"); 
botaoAlternativas.textcontent = alternativa;
caixaAlternativas.appendChild(botaoAlternativas);
 }
