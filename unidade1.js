const perguntas = [
    {
        pergunta: "Quais são os elementos básicos para fornecer informações através da Web?",
        respostas: [
            "HTML, CSS, JavaScript",
            "PHP, ASPX, JSP",
            "MySQL, Oracle, SQLServer",
            "Internet Explorer, Mozilla Firefox, Google Chrome"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre Client Side e Server Side no desenvolvimento web?",
        respostas: [
            "Client Side refere-se à execução de código no servidor, enquanto Server Side refere-se à execução de código no cliente.",
            "Client Side refere-se à execução de código no cliente, enquanto Server Side refere-se à execução de código no servidor.",
            "Client Side refere-se à execução de código no navegador, enquanto Server Side refere-se à execução de código no sistema operacional.",
            "Não há diferença entre Client Side e Server Side."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o papel do W3C no desenvolvimento da web?",
        respostas: [
            "Desenvolver padrões para a web",
            "Desenvolver navegadores web",
            "Desenvolver servidores web",
            "Desenvolver sistemas operacionais"
        ],
        correta: 0
    },
    {
        pergunta: "Quais são os principais motores de renderização utilizados pelos navegadores?",
        respostas: [
            "Internet Explorer, Safari, Chrome",
            "Webkit, Gecko, Trident",
            "Firefox, SeaMonkey, Safari",
            "Chrome, Opera, Edge"
        ],
        correta: 1
    },
    {
        pergunta: "Por que é importante garantir a compatibilidade entre navegadores ao desenvolver para a web?",
        respostas: [
            "Para tornar o código mais bonito",
            "Para que o site funcione apenas em um navegador específico",
            "Para garantir que o site tenha o mesmo aspecto e funcionalidade em diferentes navegadores",
            "Para aumentar a velocidade de carregamento do site"
        ],
        correta: 2
    },
    {
        pergunta: "O que são as tags HTML?",
        respostas: [
            "Bancos de dados",
            "Elementos de formatação da linguagem",
            "Sistemas operacionais"
        ],
        correta: 1 // "Elementos de formatação da linguagem" é a resposta correta
    },
    {
        pergunta: "O que define a estrutura básica de um documento HTML?",
        respostas: [
            "As tags <header>, <article> e <footer>",
            "As tags <html>, <head> e <body>",
            "As tags <meta>, <link> e <script>"
        ],
        correta: 1 // "As tags <html>, <head> e <body>" é a resposta correta
    },
    {
        pergunta: "O que a tag <meta> faz em um documento HTML?",
        respostas: [
            "Define ligações da página com outros arquivos",
            "Define o conteúdo principal do documento",
            "Define propriedades da página como codificação de caracteres e descrição"
        ],
        correta: 2 // "Define propriedades da página como codificação de caracteres e descrição" é a resposta correta
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


