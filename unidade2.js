const perguntas = [
    {
        pergunta: "Qual é o principal objetivo da linguagem HTML desde a sua primeira especificação?",
        respostas: [
            "Formatação visual de documentos",
            "Estruturar documentos",
            "Desenvolvimento de sistemas operacionais",
            "Criar bancos de dados"
        ],
        correta: 1 
    },
    {
        pergunta: "Para que serve a linguagem CSS em relação ao HTML?",
        respostas: [
            "Estruturar documentos",
            "Formatar o conteúdo de um documento",
            "Criar interatividade",
            "Nenhuma das opções acima"
        ],
        correta: 1 
    },
    {
        pergunta: "Quais são os elementos básicos de um documento HTML?",
        respostas: [
            "<header>, <section>, <footer>",
            "<html>, <head>, <body>",
            "<meta>, <link>, <script>",
            "<h1>, <p>, <br>"
        ],
        correta: 1 
    },
    {
        pergunta: "Qual atributo HTML é usado para definir o texto alternativo para uma imagem?",
        respostas: [
            "alt",
            "src",
            "href",
            "title"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função das tags <br /> em HTML?",
        respostas: [
            "Criar uma tabela",
            "Definir um parágrafo",
            "Quebrar a linha",
            "Nenhuma das opções acima"
        ],
        correta: 2 
    },
    {
        pergunta: "Como devem ser escritas as tags no HTML de acordo com a convenção e boas praticas da codificação?",
        respostas: [
            "Com letras maiúsculas",
            "Com letras minúsculas",
            "Das duas formas.",
            "Nenhuma das opções acima"
        ],
        correta: 1 
    },
    {
        pergunta: "Qual é o elemento HTML usado para criar um hyperlink?",
        respostas: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correta: 1 
    },
    {
        "pergunta": "Qual é o propósito principal da tag HTML <p>?",
        "respostas": [
            "Criar um parágrafo de texto.",
            "Inserir uma imagem na página.",
            "Definir um link para outra página.",
            "Organizar uma lista ordenada."
        ],
        "correta": 0
    },
    {
        pergunta: "Qual é a função do elemento HTML <div>?",
        respostas: [
                "Criar um link para outra página.",
                "Definir um título para a página.",
                "Agrupar e estilizar elementos em um bloco.",
                "Inserir uma imagem na página."
            ],
            "correta": 2
        
    },
    {
        pergunta: "Qual tag é utilizada para criar uma lista ordenada?",
        respostas: [
            "<ul>",
            "<li>",
            "<ol>",
            "<dl>"
        ],
        correta: 2 
    },
    {
        "pergunta": "Qual é o propósito do elemento HTML <span>?",
        "respostas": [
            "Criar uma área de texto editável.",
            "Definir uma seção de navegação.",
            "Agrupar e estilizar elementos em linha.",
            "Inserir uma tabela na página."
        ],
        "correta": 2
    },
    {
        pergunta: "Qual elemento HTML representa um conteúdo importante?",
        respostas: [
            "<strong>",
            "<em>",
            "<b>",
            "<i>"
        ],
        correta: 0 
    },
    {
        pergunta: "Para que serve a tag <hr> em HTML?",
        respostas: [
            "Para criar uma lista ordenada",
            "Para inserir uma linha horizontal",
            "Para representar um conteúdo importante",
            "Nenhuma das opções acima"
        ],
        correta: 1 
    },
    {
        pergunta: "O que as tags <header>, <nav>, <section>, <article>, <aside>, <footer> têm em comum?",
        respostas: [
            "São elementos de estilo em HTML",
            "São elementos de semântica em HTML",
            "São elementos de formatação em HTML",
            "Nenhuma das opções acima"
        ],
        correta: 1 
    },
    {
        pergunta: "O que representa a tag <nav> em HTML?",
        respostas: [
            "Uma seção independente do restante do conteúdo",
            "Seção de navegação em um site",
            "Um artigo independente do restante do conteúdo",
            "Nenhuma das opções acima"
        ],
        correta: 1 
    }
];




const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta 
            
            
            corretas.delete(item)
            if(estaCorreta) {

                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        
        
        quizItem.querySelector('dl').appendChild(dt)
}   

quizItem.querySelector('dl dt').remove()

quiz.appendChild(quizItem)
}


