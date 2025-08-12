const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Logo após sair da escola, você descobre uma tecnologia inédita — um chat que consegue esclarecer qualquer dúvida e ainda gerar imagens e sons extremamente realistas. Qual pensamento vem à sua mente nesse instante?",
        alternativas: [
            {
                texto: "Isso me da medo!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é perfeito!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Depois de conhecer essa tecnologia chamada Inteligência Artificial, a professora de tecnologia da escola decidiu fazer várias aulas sobre o assunto. No final de uma delas, ela pede que você escreva um trabalho falando sobre como a IA pode ser usada na sala de aula. O que você faz?",
        alternativas: [
            {
                texto: "Empregue um buscador na internet que funcione com inteligência artificial para localizar dados relevantes para o seu trabalho, explicando de forma clara e acessível.",
                afirmacao: "Foi possível utilizar a inteligência artificial para obter informações úteis."
            },
            {
                texto: "Redija o trabalho utilizando como base as conversas com os colegas, pesquisas realizadas na internet e seus conhecimentos pessoais sobre o tema.",
                afirmacao: "Sentiu que utilizar suas próprias habilidades facilitou a escrita do seu trabalho."
            }
        ]
    },
    {
        enunciado: "Com o trabalho escrito finalizado, a professora organizou um debate na classe para discutir o processo de pesquisa e escrita. No diálogo, foi levantado um tema importante: de que forma a inteligência artificial pode influenciar o mercado de trabalho no futuro. Como você se posicionaria?",
        alternativas: [
            {
                texto: "Afirma que a IA pode abrir portas para empregos inéditos e desenvolver habilidades nas pessoas.",
                afirmacao: "Está impulsionando o desenvolvimento da IA e buscando abrir novos horizontes profissionais nessa área."
            },
            {
                texto: "Tenho apreensão quanto às pessoas que podem ser substituídas por máquinas e acredito na importância de garantir a proteção dos trabalhadores.",
                afirmacao: "Preocupado com as pessoas, você decidiu formar um grupo de estudo entre trabalhadores para discutir como aplicar a IA de maneira ética."
            }
        ]
    },
    {
        enunciado: "Ao encerrar o debate, surgiu a tarefa: criar no computador uma imagem que representasse seu ponto de vista sobre inteligência artificial. E agora?",
        alternativas: [
            {
                texto: "Fazer uma ilustração por meio de uma ferramenta de design, como o Paint.",
                afirmacao: "Você notou que vários indivíduos não dominam as ferramentas convencionais e decidiu ensinar design por meio de softwares de pintura digital para iniciantes."
            },
            {
                texto: "Criar um desenho por meio de uma ferramenta de geração de imagens com inteligência artificial.",
                afirmacao: "O uso de geradores de imagem acelerou seu processo criativo, e agora você ensina pessoas que têm dificuldade com desenhos manuais a utilizá-los."
            }
        ]
    },
    {
        enunciado: "Falta uma semana para entregar o trabalho de biologia em grupo. O progresso está lento e alguém da equipe resolve utilizar a inteligência artificial. No entanto, o texto final acabou ficando exatamente igual ao gerado pelo chat. Qual seria sua atitude? ",
        alternativas: [
            {
                texto: "Digitar comandos no chat contribui para o trabalho, então utilizar o texto inteiro é aceitável.",
                afirmacao: "De forma indesejada, passou a contar com a IA para fazer todas as suas atividades, sentindo-se agora dependente dessa tecnologia."
            },
            {
                texto: "O chat pode ser uma ferramenta muito avançada, porém é necessário cuidado, já que máquinas cometem erros; assim, é essencial revisar o conteúdo e incluir perspectivas próprias.",
                afirmacao: "Notou que a IA reproduz orientações baseadas na programação da empresa responsável, e grande parte do conteúdo do chat não correspondia ao seu pensamento, por isso sabe que os textos gerados devem funcionar como ajuda, não como trabalho final."
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
