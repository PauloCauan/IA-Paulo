const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            { 
                texto: "Alternativa A",
                afirmação: "afirmação da alternativa A"
            },
            {   
                texto: "Alternativa B",
                afirmação: "afirmação da alternativa B"
            }
        ]
    },

    {
        enunciado: "Pergunta 2",
        alternativas: [
            { 
                texto: "Alternativa A",
                afirmação: "afirmação da alternativa A"
            },
            {   
                texto: "Alternativa B",
                afirmação: "afirmação da alternativa B"
            }
        ]
    },

    {
        enunciado: "Pergunta 3",
        alternativas: [
            { 
                texto: "Alternativa A",
                afirmação: "afirmação da alternativa A"
            },
            {   
                texto: "Alternativa B",
                afirmação: "afirmação da alternativa B"
            }
        ]
    },

    {
        enunciado: "Pergunta 4",
        alternativas: [
            { 
                texto: "Alternativa A",
                afirmação: "afirmação da alternativa A"
            },
            {   
                texto: "Alternativa B",
                afirmação: "afirmação da alternativa B"
            }
        ]
    },

    {
        enunciado: "Pergunta 5",
        alternativas: [
            { 
                texto: "Alternativa A",
                afirmação: "afirmação da alternativa A"
            },
            {   
                texto: "Alternativa B",
                afirmação: "afirmação da alternativa B"
            }
        ]
    }
];

let atual= 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPergunta(){
    if (atual >= perguntas.length){
        mostrarResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",
            ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual ++;
    mostraPergunta();
}




function mostraResultado(){
    caixaPerguntas.textContent = "De acordo com suas respostas...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();