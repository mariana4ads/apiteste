const perguntas = [
    {
        pergunta: "Qual é a principal utilidade dos formulários em HTML?",
        respostas: [
            "Reproduzir áudio",
            "Coletar dados dos usuários",
            "Executar scripts em JavaScript",
            "Exibir vídeos"
        ],
        correta: 1 
    },
    {
        pergunta: "Qual tag HTML é utilizada para criar formulários?",
        respostas: [
            "<form>",
            "<input>",
            "<button>",
            "<select>"
        ],
        correta: 0 
    },
    {
        pergunta: "Qual é a função do atributo 'required' em HTML?",
        respostas: [
            "Tocar áudio",
            "Obrigatório para preencher os dados",
            "Escolher um arquivo",
            "Definir uma imagem"
        ],
        correta: 1 
    },
    {
        pergunta: "Para que serve o atributo 'autofocus' em HTML?",
        respostas: [
            "Controlar o áudio",
            "Dar foco automaticamente em um campo",
            "Enviar um formulário",
            "Reproduzir um vídeo"
        ],
        correta: 1
    },
    {
<<<<<<< HEAD
        pergunta: "Qual é o ''type'' utilizado para digitar senhas em um formulário?",
=======
        pergunta: "Qual é o &#34type&#34 utilizado para digitar senhas em um formulário?",
>>>>>>> 082b48c526a54a5ef9ecc52a375d4e08e6840bbf
        respostas: [
            "text",
            "password",
            "email",
            "file"
        ],
        correta: 1
    },
    {
        pergunta: "Qual tag HTML é utilizada para criar um botão clicável?",
        respostas: [
            "<button>",
            "<form>",
            "<label>",
            "<input>"
        ],
        correta: 0 
    },
    {
        pergunta: "Como podemos criar uma lista de sugestões para um campo de entrada de dados?",
        respostas: [
            "<option>",
            "<input>",
            "<button>",
            "<datalist>"
        ],
        correta: 3 
<<<<<<< HEAD
    },
=======
>>>>>>> 082b48c526a54a5ef9ecc52a375d4e08e6840bbf
    {
        pergunta: "Qual é a finalidade do campo oculto em um formulário HTML?",
        respostas: [
            "Exibir dados",
            "Enviar e-mail",
            "Enviar arquivo",
            "Armazenar dados ocultos"
        ],
        correta: 3 
    },
    {
        pergunta: "Qual tipo de campo HTML permite selecionar apenas uma opção?",
        respostas: [
            "Checkbox",
            "Radio",
            "Button",
            "Textarea"
        ],
        correta: 1 
    },
    {
        pergunta: "O que a tag <textarea> representa em um formulário HTML?",
        respostas: [
            "Um campo de seleção",
            "Um campo de texto de várias linhas",
            "Um campo oculto",
            "Um botão de envio"
        ],
        correta: 1 
    },
    {
        pergunta: "Qual atributo HTML é utilizado para fornecer uma dica para digitação em um campo?",
        respostas: [
            "placeholder",
            "autofocus",
            "required",
            "value"
        ],
        correta: 0 
    },
    {
        pergunta: "Qual é o formato de vídeo mais suportado pelos navegadores?",
        respostas: [
            "MP4",
            "OGG",
            "WAV",
            "WebM"
        ],
        correta: 0 
    },
    {
        pergunta: "Para que serve o elemento <source> em um elemento <audio> ou <video>?",
        respostas: [
            "Para definir o título",
            "Para definir o autor",
            "Para definir o formato do arquivo",
            "Para definir o tamanho do arquivo"
        ],
        correta: 2 
    },
    {
        pergunta: "Qual é a finalidade da tag <button> em HTML?",
        respostas: [
            "Reproduzir áudio",
            "Enviar e-mail",
            "Controlar o áudio",
            "Criar um botão clicável"
        ],
        correta: 3 
    },
    {
        "pergunta": "Qual dos seguintes recursos do HTML5 permite a comunicação bidirecional entre o cliente e o servidor?",
        "respostas": [
            "Geolocalização",
            "Armazenamento de dados no cliente (Web Storage e WebSQL)",
            "Web Messaging",
            "Web Socket",
            "Web Workers"
        ],
        "correta": 3
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

