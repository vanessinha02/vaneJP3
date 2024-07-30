const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma bola, e pergunta o que se pod fazer com esta bola?",
        alternativas: [
            {
                texto: "Isso é estranho!",
                afirmacao: "No início ficou nõ ouve o que fazer. "
            },
            {
                texto: "Isso é bom!",
                afirmacao: "Quis saber como usar a bola no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Depois de econtrar a bola, uma professora de Educação Física da escola decidiu fazer uma sequência de aulas sobre esportes. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de esportes no dia a dia. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet para que ela ajude a encontrar informações relevantes para o trabalho.",
                afirmacao: "Conseguiu utilizar a internt para buscar informações úteis obre esportes."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: no que os esportes impactam no futuro do ser humano. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que os esportes pode melhorar a qualidade e habilidades humanas.",
                afirmacao: "Vem impulsionando a luta para que as pessoas pratiquem esse tipo de atividades."
            },
            {
                texto: "Me preocupo com as pessoas que não praticam nenhum tipo de atividade e defendem a importância da mesma.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um time, para fazer atividades, pelo menos, uma vez por semana."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre esportes. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "FIM!",
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "FIM!",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
const botaoAlternativas = document.createElement("button");
